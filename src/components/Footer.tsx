import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-eco text-white">
                <span className="font-display font-bold text-lg">F</span>
                <div className="absolute -right-1 -bottom-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-eco rounded-full" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-tight text-lg leading-none">FUTUREX MOTORS</span>
                <span className="text-[10px] tracking-widest text-gray-400 uppercase">ITALIA</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Pionieri del futuro della mobilità di lusso sostenibile con design e innovazione italiana.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.56 17.44C9.37 17.44 9.19 17.38 9.04 17.26C8.82 17.07 8.73 16.79 8.75 16.5C8.77 16.21 8.89 15.95 9.14 15.8L9.27 15.7C10.12 15.06 10.5 14.5 10.5 13C10.5 11.49 9.26 10.24 7.75 10.24C6.24 10.24 5 11.49 5 13C5 13.82 5.32 14.58 5.88 15.14C6.02 15.28 6.09 15.46 6.09 15.65C6.09 15.84 6.02 16.02 5.88 16.16C5.62 16.42 5.19 16.41 4.93 16.15C4.13 15.35 3.69 14.21 3.69 13C3.69 10.75 5.52 8.93 7.75 8.93C9.98 8.93 11.81 10.75 11.81 13C11.81 15 10.94 16.18 9.56 17.13V17.31C9.56 17.37 9.55 17.43 9.52 17.5C9.43 17.44 9.49 17.44 9.56 17.44ZM16.25 17.44C14.02 17.44 12.19 15.61 12.19 13.37C12.19 11.13 14.02 9.31 16.25 9.31C18.48 9.31 20.31 11.13 20.31 13.37C20.31 15.61 18.48 17.44 16.25 17.44ZM16.25 10.62C14.74 10.62 13.5 11.86 13.5 13.37C13.5 14.88 14.74 16.12 16.25 16.12C17.76 16.12 19 14.88 19 13.37C19 11.86 17.76 10.62 16.25 10.62Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94001 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7678 2.23903 16.9402 2.08043 16.1 2.07C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.91 2.07C7.06975 2.08043 6.24216 2.23903 5.46 2.53C4.78764 2.77665 4.18827 3.16956 3.69 3.68C3.17743 4.17518 2.78418 4.78044 2.54 5.45C2.24903 6.2322 2.09043 7.05979 2.08 7.9C2.01 8.94 2 9.28 2 12C2 14.72 2.01 15.06 2.08 16.09C2.09043 16.9402 2.24903 17.7678 2.54 18.55C2.78418 19.2196 3.17743 19.8248 3.69 20.32C4.18827 20.8304 4.78764 21.2234 5.46 21.47C6.24216 21.761 7.06975 21.9196 7.91 21.93C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.09 21.93C16.9402 21.9196 17.7678 21.761 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2303 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.08 22.01 14.74 22.01 12.02C22.01 9.3 22.01 8.96 21.94 7.92L21.94 7.88ZM20.14 16C20.1327 16.6348 20.0142 17.2637 19.79 17.86C19.6125 18.2952 19.3382 18.6884 18.99 19.01C18.6668 19.3548 18.2752 19.6292 17.84 19.81C17.2437 20.0342 16.6148 20.1527 15.98 20.16C15.02 20.22 14.62 20.22 12.02 20.22C9.42 20.22 9.02 20.22 8.02 20.16C7.35046 20.1727 6.68361 20.057 6.06 19.82C5.65257 19.6301 5.28099 19.3628 4.97 19.03C4.62377 18.7068 4.35008 18.3152 4.17 17.88C3.93889 17.2671 3.81526 16.6204 3.81 15.97C3.81 15.01 3.74 14.61 3.74 12.01C3.74 9.41 3.74 9.01 3.81 8.01C3.81801 7.37644 3.93839 6.74978 4.17 6.16C4.36065 5.72396 4.64285 5.33758 5 5.02C5.30946 4.66448 5.68566 4.38076 6.11 4.19C6.70243 3.96758 7.32984 3.84947 7.96 3.84C8.92 3.84 9.32 3.77 11.92 3.77C14.52 3.77 14.92 3.77 15.92 3.84C16.5548 3.84726 17.1837 3.96582 17.78 4.19C18.2363 4.38371 18.6399 4.66332 18.97 5.02C19.3102 5.34086 19.5836 5.72082 19.78 6.15C20.0227 6.74257 20.1412 7.37458 20.14 8.01C20.2 8.97 20.2 9.37 20.2 11.97C20.2 14.57 20.2 14.97 20.14 15.93V16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Chi Siamo</a></li>
              <li><a href="#models" className="text-gray-400 hover:text-white transition-colors">Modelli</a></li>
              <li><a href="#sustainability" className="text-gray-400 hover:text-white transition-colors">Sostenibilità</a></li>
              <li><a href="#innovation" className="text-gray-400 hover:text-white transition-colors">Innovazione</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carriere</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Stampa</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Visitaci</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">FUTUREX MOTORS ITALIA</p>
              <p className="mb-2">Via Longobardo, 23</p>
              <p className="mb-2">72100 Brindisi, Italia</p>
              <p className="mb-2">+39 0831 123456</p>
              <p className="mb-4">info@futurexmotors.it</p>
            </address>
            <div className="inline-block px-3 py-1 rounded-full border border-rosso">
              <span className="text-xs uppercase tracking-widest font-medium text-rosso">Aperto per Visite</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Iscriviti</h3>
            <p className="text-gray-400 mb-4">Rimani aggiornato sulle nostre ultime innovazioni ed eventi.</p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="La tua email" 
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rosso"
                />
              </div>
              <button 
                type="submit"
                className="button-hover w-full px-4 py-2 rounded-lg bg-rosso text-white font-medium"
              >
                Iscriviti
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FUTUREX MOTORS ITALIA. Tutti i diritti riservati.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Termini di Servizio</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
