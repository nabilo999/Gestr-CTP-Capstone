export function Panel({ title, icon: Icon, children, className = '', extra, blue = false }) {
  return <section className={`panel ${blue ? 'blue-panel' : ''} ${className}`} aria-label={title}>
    <header className="panel-header">{Icon && <Icon aria-hidden="true" />}<h2>{title}</h2>{extra && <div className="panel-extra">{extra}</div>}</header>
    <div className="panel-body">{children}</div>
  </section>;
}

export function PageBanner({ title, subtitle, icon: Icon }) {
  return <header className="page-banner"><Icon aria-hidden="true" /><div><h1>{title}</h1><p>{subtitle}</p></div></header>;
}
