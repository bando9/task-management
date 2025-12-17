export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 text-center text-sm text-gray-600 ">
      &copy; {currentYear}. Mindflow by{" "}
      <a
        href="https://bandomega.com"
        className="hover:underline text-blue-600 font-medium"
        target="_blank"
      >
        Bando Mega.{" "}
      </a>
      All Rights Reserved.
    </footer>
  );
}
