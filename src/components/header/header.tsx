import './Header.css';

export default function Header() {
   return (
      <header className="header">
         <nav className="menu">
            <ul>
               <li><a href="#">LOGO</a></li>
               <li><a href="#">Política</a></li>
               <li><a href="#">Economia</a></li>
               <li><a href="#">Esportes</a></li>
               <li><a href="#">Entretenimento</a></li>
            </ul>
         </nav>
      </header>
   );
}
