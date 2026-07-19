function Footer() {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="text-center text-gray-500">
        © {new Date().getFullYear()} Harsh Awasthi. Built with React & Tailwind CSS.
      </div>
    </footer>
  );
}

export default Footer;