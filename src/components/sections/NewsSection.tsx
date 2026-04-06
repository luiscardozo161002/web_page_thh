import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { Newspaper, Image as ImageIcon, Sparkles, ChevronRight, Calendar, Trash2, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import { getRows, addRow, updateRow, deleteRow } from '../../services/sheetsApi';

const SHEET = 'TABLA_PUBLICACIONES';

interface NewsItem {
  TITULO: string;
  FECHA: string;
  CATEGORIA: string;
  CONTENIDO: string;
  IMAGEN: string;
  COLOR_BADGE: string;
  _row: number;
}

const FALLBACK: NewsItem[] = [
  {
    TITULO: 'Día de la Bandera: Orgullo que nos une',
    FECHA: '24 de Febrero',
    CATEGORIA: 'Día Célebre',
    CONTENIDO: 'Hoy honramos nuestro símbolo nacional, recordándonos la fuerza y unidad que impulsa nuestro trabajo diario.',
    IMAGEN: 'https://images.unsplash.com/photo-1582234053673-a621c1f4e1f7?auto=format&fit=crop&q=80&w=800',
    COLOR_BADGE: 'bg-red-500',
    _row: 2,
  },
  {
    TITULO: 'Día Internacional de la Mujer',
    FECHA: '8 de Marzo',
    CATEGORIA: 'Reconocimiento',
    CONTENIDO: 'Reconocemos y celebramos el papel fundamental de las mujeres que forman parte de la familia THH.',
    IMAGEN: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800',
    COLOR_BADGE: 'bg-purple-500',
    _row: 3,
  },
  {
    TITULO: '¿Sabías qué? La Piedra de Cal en la Industria',
    FECHA: '10 de Marzo',
    CATEGORIA: 'Dato Curioso',
    CONTENIDO: 'La piedra de cal es esencial en más de 100 procesos industriales, desde la purificación del agua hasta la fabricación de acero.',
    IMAGEN: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    COLOR_BADGE: 'bg-blue-500',
    _row: 4,
  },
];

function categoryIcon(cat: string) {
  const c = cat.toLowerCase();
  if (c.includes('reconoc') || c.includes('mujer')) return ImageIcon;
  if (c.includes('dato') || c.includes('sab') || c.includes('curios')) return Newspaper;
  return Sparkles;
}

export default function NewsSection() {
  const { user, token, editMode } = useAuth();
  const [news, setNews] = useState<NewsItem[]>(FALLBACK);
  const [saving, setSaving] = useState<number | null>(null);
  const pendingRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());
  const newsRef = useRef<NewsItem[]>(FALLBACK);

  useEffect(() => { newsRef.current = news; }, [news]);

  useEffect(() => {
    if (!token) {
      setNews(FALLBACK);
      return;
    }
    getRows(SHEET, token)
      .then((rows) => {
        console.log('[NewsSection] Datos cargados:', rows);
        if (rows.length > 0) setNews(rows as unknown as NewsItem[]);
      })
      .catch((err) => {
        console.error('[NewsSection] Error cargando Sheet:', err);
      });
  }, [token]);

  const handleChange = (row: number, field: keyof NewsItem, value: string) => {
    setNews((prev) => prev.map((n) => (n._row === row ? { ...n, [field]: value } : n)));

    const key = `${row}-${field}`;
    const existing = pendingRef.current.get(key);
    if (existing) clearTimeout(existing);

    const timer = setTimeout(async () => {
      if (!token) return;
      const item = newsRef.current.find((n) => n._row === row);
      if (!item) return;
      const { _row, ...data } = { ...item, [field]: value };
      setSaving(row);
      await updateRow(token, _row as number, data as Record<string, string>, SHEET).catch(console.error);
      setSaving(null);
    }, 800);

    pendingRef.current.set(key, timer);
  };

  const handleDelete = (row: number) => {
    if (!token) return;
    toast('¿Eliminar esta nota?', {
      action: {
        label: 'Eliminar',
        onClick: async () => {
          setNews((prev) => prev.filter((n) => n._row !== row));
          await deleteRow(token, row, SHEET).catch(console.error);
          const fresh = await getRows(SHEET, token).catch(() => []);
          if (fresh.length > 0) setNews(fresh as unknown as NewsItem[]);
        },
      },
      cancel: {
        label: 'Cancelar',
        onClick: () => {},
      },
    });
  };

  const handleAdd = async () => {
    if (!token) return;
    const blank = {
      TITULO: 'Nueva Nota',
      FECHA: 'DD de Mes',
      CATEGORIA: 'Categoría',
      CONTENIDO: 'Descripción de la nota...',
      IMAGEN: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
      COLOR_BADGE: 'bg-blue-500',
    };
    await addRow(token, blank, SHEET).catch(console.error);
    const fresh = await getRows(SHEET, token).catch(() => []);
    if (fresh.length > 0) setNews(fresh as unknown as NewsItem[]);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold text-navy-blue dark:text-white mb-4">
              Notas y Días Célebres
            </h2>
            <div className="w-20 h-1.5 bg-secondary mb-6" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Mantente al tanto de nuestras fechas alusivas, noticias de la empresa y datos
              fascinantes sobre nuestra industria.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {editMode && user && (
              <button
                onClick={handleAdd}
                className="flex items-center gap-2 bg-navy-blue text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-blue-800 transition-colors shadow-md"
              >
                <Plus size={15} />
                Agregar nota
              </button>
            )}
            <button className="flex items-center space-x-2 text-secondary font-bold hover:translate-x-1 transition-transform whitespace-nowrap">
              <span>Ver todas las notas</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => {
            const Icon = categoryIcon(item.CATEGORIA);
            const isSaving = saving === item._row;

            return (
              <div
                key={item._row}
                className={`group bg-white dark:bg-gray-800/60 rounded-3xl overflow-hidden shadow-md border dark:border-gray-700/50 transition-all duration-500 backdrop-blur-sm ${
                  editMode
                    ? 'border-blue-300 dark:border-blue-600/50 ring-2 ring-blue-100 dark:ring-blue-900/30'
                    : 'border-gray-100 hover:shadow-2xl dark:hover:shadow-black/40'
                } ${isSaving ? 'opacity-70' : ''}`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.IMAGEN}
                    alt={item.TITULO}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div
                    className={`absolute top-4 left-4 ${item.COLOR_BADGE} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-1.5`}
                  >
                    <Icon size={12} />
                    {editMode ? (
                      <input
                        value={item.CATEGORIA}
                        onChange={(e) => handleChange(item._row, 'CATEGORIA', e.target.value)}
                        className="bg-transparent outline-none uppercase tracking-widest w-24 text-white placeholder-white/70"
                        placeholder="Categoría"
                      />
                    ) : (
                      <span className="uppercase tracking-widest">{item.CATEGORIA}</span>
                    )}
                  </div>
                  {editMode && user && (
                    <button
                      onClick={() => handleDelete(item._row)}
                      className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 shadow-lg transition-colors"
                      title="Eliminar nota"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wide mb-3">
                    <Calendar size={13} />
                    {editMode ? (
                      <input
                        value={item.FECHA}
                        onChange={(e) => handleChange(item._row, 'FECHA', e.target.value)}
                        className="bg-transparent border-b border-gray-300 dark:border-gray-600 outline-none text-gray-500 dark:text-gray-400 w-32"
                        placeholder="Fecha"
                      />
                    ) : (
                      item.FECHA
                    )}
                  </div>

                  {editMode ? (
                    <input
                      value={item.TITULO}
                      onChange={(e) => handleChange(item._row, 'TITULO', e.target.value)}
                      className="w-full text-xl font-bold text-navy-blue dark:text-white mb-3 bg-transparent border-b-2 border-blue-400 outline-none leading-snug"
                      placeholder="Título"
                    />
                  ) : (
                    <h3 className="text-xl font-bold text-navy-blue dark:text-white mb-3 group-hover:text-secondary transition-colors leading-snug">
                      {item.TITULO}
                    </h3>
                  )}

                  {editMode ? (
                    <textarea
                      value={item.CONTENIDO}
                      onChange={(e) => handleChange(item._row, 'CONTENIDO', e.target.value)}
                      rows={3}
                      className="w-full text-sm text-gray-600 dark:text-gray-400 bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg p-2 outline-none resize-none mb-3"
                      placeholder="Contenido"
                    />
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-5 text-sm leading-relaxed">
                      {item.CONTENIDO}
                    </p>
                  )}

                  {editMode ? (
                    <input
                      value={item.IMAGEN}
                      onChange={(e) => handleChange(item._row, 'IMAGEN', e.target.value)}
                      className="w-full text-xs text-gray-400 bg-transparent border-b border-gray-200 dark:border-gray-700 outline-none mb-2"
                      placeholder="URL de imagen"
                    />
                  ) : (
                    <button className="text-sm text-navy-blue dark:text-secondary font-bold hover:text-secondary dark:hover:text-red-400 transition-colors underline underline-offset-4">
                      Leer nota completa
                    </button>
                  )}

                  {isSaving && (
                    <p className="text-xs text-blue-400 mt-1 animate-pulse">Guardando...</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
