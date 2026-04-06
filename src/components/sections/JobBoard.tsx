import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { Briefcase, MapPin, Clock, ArrowRight, BadgeDollarSign, Trash2, Plus } from 'lucide-react';
import ButtonMailto from '@/components/ui/ButtonMailto';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import { getRows, addRow, updateRow, deleteRow } from '../../services/sheetsApi';

const SHEET = 'TABLA_EMPLEOS';

interface JobItem {
  PUESTO: string;
  UBICACION: string;
  TIPO: string;
  SALARIO: string;
  DESCRIPCION: string;
  TAG: string;
  _row: number;
}

const FALLBACK: JobItem[] = [
  {
    PUESTO: 'Operador de Quinta Rueda',
    UBICACION: 'Tula de Allende, Hgo.',
    TIPO: 'Tiempo Completo',
    SALARIO: 'Sueldo competitivo + Prestaciones',
    DESCRIPCION: 'Buscamos conductores experimentados con licencia federal tipo E para transporte de materiales industriales.',
    TAG: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400',
    _row: 2,
  },
  {
    PUESTO: 'Auxiliar de Mantenimiento Mecánico',
    UBICACION: 'Atitalaquia, Hgo.',
    TIPO: 'Tiempo Completo',
    SALARIO: 'Atractivo esquema de compensación',
    DESCRIPCION: 'Mantenimiento preventivo y correctivo de flota pesada y maquinaria minera.',
    TAG: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400',
    _row: 3,
  },
  {
    PUESTO: 'Analista de Logística y Tráfico',
    UBICACION: 'Tula de Allende, Hgo.',
    TIPO: 'Híbrido',
    SALARIO: 'Según experiencia',
    DESCRIPCION: 'Coordinación de rutas, monitoreo GPS y optimización de tiempos de entrega.',
    TAG: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400',
    _row: 4,
  },
];

export default function JobBoard() {
  const { user, token, editMode } = useAuth();
  const [jobs, setJobs] = useState<JobItem[]>(FALLBACK);
  const [saving, setSaving] = useState<number | null>(null);
  const pendingRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());
  const jobsRef = useRef<JobItem[]>(FALLBACK);

  useEffect(() => { jobsRef.current = jobs; }, [jobs]);

  useEffect(() => {
    if (!token) {
      setJobs(FALLBACK);
      return;
    }
    getRows(SHEET, token)
      .then((rows) => {
        console.log('[JobBoard] Datos cargados:', rows);
        if (rows.length > 0) setJobs(rows as unknown as JobItem[]);
      })
      .catch((err) => {
        console.error('[JobBoard] Error cargando Sheet:', err);
      });
  }, [token]);

  const handleChange = (row: number, field: keyof JobItem, value: string) => {
    setJobs((prev) => prev.map((j) => (j._row === row ? { ...j, [field]: value } : j)));

    const key = `${row}-${field}`;
    const existing = pendingRef.current.get(key);
    if (existing) clearTimeout(existing);

    const timer = setTimeout(async () => {
      if (!token) return;
      const item = jobsRef.current.find((j) => j._row === row);
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
    toast('¿Eliminar esta vacante?', {
      action: {
        label: 'Eliminar',
        onClick: async () => {
          setJobs((prev) => prev.filter((j) => j._row !== row));
          await deleteRow(token, row, SHEET).catch(console.error);
          const fresh = await getRows(SHEET, token).catch(() => []);
          if (fresh.length > 0) setJobs(fresh as unknown as JobItem[]);
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
      PUESTO: 'Nueva Vacante',
      UBICACION: 'Ubicación',
      TIPO: 'Tiempo Completo',
      SALARIO: 'A convenir',
      DESCRIPCION: 'Descripción del puesto...',
      TAG: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400',
    };
    await addRow(token, blank, SHEET).catch(console.error);
    const fresh = await getRows(SHEET, token).catch(() => []);
    if (fresh.length > 0) setJobs(fresh as unknown as JobItem[]);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-navy-blue dark:text-white mb-4">
            Bolsa de Trabajo
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Únete al equipo líder en infraestructura y logística en Hidalgo. Buscamos talento
            apasionado por la excelencia.
          </p>
        </div>

        {editMode && user && (
          <div className="max-w-5xl mx-auto mb-4 flex justify-end">
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 bg-navy-blue text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-blue-800 transition-colors shadow-md"
            >
              <Plus size={15} />
              Agregar vacante
            </button>
          </div>
        )}

        <div className="max-w-5xl mx-auto space-y-5">
          {jobs.map((job) => {
            const isSaving = saving === job._row;

            return (
              <div
                key={job._row}
                className={`group bg-white dark:bg-gray-800/60 p-5 md:p-7 rounded-3xl shadow-sm border dark:border-gray-700/50 transition-all duration-300 backdrop-blur-sm ${
                  editMode
                    ? 'border-blue-300 dark:border-blue-600/50 ring-2 ring-blue-100 dark:ring-blue-900/30'
                    : 'border-gray-100 hover:shadow-xl dark:hover:shadow-black/30 hover:border-blue-600/30'
                } ${isSaving ? 'opacity-70' : ''}`}
              >
                {/* ── Fila superior: icono + título + badge ── */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-11 h-11 md:w-14 md:h-14 bg-blue-50 dark:bg-navy-blue/30 text-navy-blue dark:text-blue-300 rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Briefcase size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    {editMode ? (
                      <input
                        value={job.PUESTO}
                        onChange={(e) => handleChange(job._row, 'PUESTO', e.target.value)}
                        className="text-lg font-bold text-navy-blue dark:text-white bg-transparent border-b-2 border-blue-400 outline-none w-full"
                        placeholder="Nombre del puesto"
                      />
                    ) : (
                      <h3 className="text-lg md:text-xl font-bold text-navy-blue dark:text-white leading-tight">
                        {job.PUESTO}
                      </h3>
                    )}
                    {editMode ? (
                      <input
                        value={job.TIPO}
                        onChange={(e) => handleChange(job._row, 'TIPO', e.target.value)}
                        className="mt-1 text-xs font-bold px-3 py-1 rounded-full outline-none w-32 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                        placeholder="Tipo"
                      />
                    ) : (
                      <span className={`inline-block mt-1 text-xs font-bold px-3 py-0.5 rounded-full ${job.TAG}`}>
                        {job.TIPO}
                      </span>
                    )}
                  </div>
                </div>

                {/* ── Meta: ubicación + tipo ── */}
                <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3 pl-1">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-blue-600 shrink-0" />
                    {editMode ? (
                      <input
                        value={job.UBICACION}
                        onChange={(e) => handleChange(job._row, 'UBICACION', e.target.value)}
                        className="bg-transparent border-b border-gray-300 dark:border-gray-600 outline-none w-40"
                        placeholder="Ubicación"
                      />
                    ) : (
                      <span>{job.UBICACION}</span>
                    )}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} className="text-blue-600 shrink-0" />
                    {job.TIPO}
                  </span>
                </div>

                {/* ── Descripción ── */}
                {editMode ? (
                  <textarea
                    value={job.DESCRIPCION}
                    onChange={(e) => handleChange(job._row, 'DESCRIPCION', e.target.value)}
                    rows={2}
                    className="w-full text-sm text-gray-500 dark:text-gray-400 bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg p-2 outline-none resize-none italic mb-4"
                    placeholder="Descripción del puesto"
                  />
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 text-sm italic leading-relaxed mb-4 pl-1">
                    "{job.DESCRIPCION}"
                  </p>
                )}

                {isSaving && (
                  <p className="text-xs text-blue-400 mb-2 animate-pulse pl-1">Guardando...</p>
                )}

                {/* ── Footer: salario + botón ── */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-gray-100 dark:border-gray-700/50">
                  <span className="flex items-center gap-1.5 text-navy-blue dark:text-gray-300 font-bold text-sm">
                    <BadgeDollarSign size={15} className="text-blue-600 shrink-0" />
                    {editMode ? (
                      <input
                        value={job.SALARIO}
                        onChange={(e) => handleChange(job._row, 'SALARIO', e.target.value)}
                        className="bg-transparent border-b border-gray-300 dark:border-gray-600 outline-none w-36 text-sm"
                        placeholder="Salario"
                      />
                    ) : (
                      <span>{job.SALARIO}</span>
                    )}
                  </span>

                  {editMode && user ? (
                    <button
                      onClick={() => handleDelete(job._row)}
                      className="flex items-center gap-1.5 bg-red-100 hover:bg-red-500 text-red-600 hover:text-white px-4 py-2 rounded-full text-sm font-bold transition-colors shrink-0"
                    >
                      <Trash2 size={14} />
                      Eliminar
                    </button>
                  ) : (
                    <ButtonMailto
                      mailto={`mailto:marilyn.thh@cooperativajuarez.com.mx?subject=${encodeURIComponent(`Postulación: ${job.PUESTO}`)}&body=${encodeURIComponent(`Hola, me interesa postularme para el puesto de ${job.PUESTO} (${job.UBICACION}).\n\nMi nombre es: \nMi correo es: \nMi teléfono es: \n\nAdjunto mi CV y quedo en espera de su respuesta.\n\nSaludos.`)}`}
                      className="shrink-0 bg-navy-blue dark:bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm shadow-md"
                    >
                      Postularme
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </ButtonMailto>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-3 text-sm">
            ¿No encontraste lo que buscabas?
          </p>
          <ButtonMailto
            mailto={`mailto:marilyn.thh@cooperativajuarez.com.mx?subject=${encodeURIComponent('Envío de CV – Vacantes futuras')}&body=${encodeURIComponent('Hola, me gustaría enviar mi CV para ser considerado(a) en futuras vacantes.\n\nMi nombre es: \nMi correo es: \nMi teléfono es: \nÁrea de interés: \n\nAdjunto mi CV.\n\nSaludos.')}`}
            label="Envíanos tu CV para futuras vacantes"
            className="text-blue-600 font-extrabold text-base hover:underline underline-offset-8 transition-colors"
          />
        </div>
      </div>
    </motion.section>
  );
}
