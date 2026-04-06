import React from "react";
import { Link } from "react-router-dom";

interface ButtonMailtoProps {
  mailto: string;
  label?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Convierte una URL mailto: a la URL de composición de Gmail
 * mailto:dest@example.com?subject=Hola&body=Texto
 * → https://mail.google.com/mail/?view=cm&fs=1&to=dest@example.com&su=Hola&body=Texto
 */
function toGmailUrl(mailto: string): string {
  // Separa "mailto:dest?params" → ["dest", "params"]
  const withoutScheme = mailto.replace(/^mailto:/i, "");
  const [to, queryString] = withoutScheme.split("?");

  const params = new URLSearchParams(queryString ?? "");
  const subject = params.get("subject") ?? "";
  const body    = params.get("body")    ?? "";

  const gmail = new URLSearchParams({
    view: "cm",
    fs:   "1",
    to,
    su:   subject,
    body,
  });

  return `https://mail.google.com/mail/?${gmail.toString()}`;
}

export default function ButtonMailto({ mailto, label, children, className }: ButtonMailtoProps) {
  return (
    <Link
      to="#"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        window.open(toGmailUrl(mailto), "_blank", "noopener,noreferrer");
      }}
    >
      {children ?? label}
    </Link>
  );
}
