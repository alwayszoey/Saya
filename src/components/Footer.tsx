export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="site-footer-copy">
          © {new Date().getFullYear()} Zyni Dev. All rights reserved.
        </p>
        <p className="site-footer-credit">
          Made with <span aria-hidden="true">♥</span> by 480p
        </p>
      </div>
    </footer>
  );
}
