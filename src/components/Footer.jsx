export default function Footer() {
  return (
    <footer className="footer bottom-0 left-0 w-auto z-50 bg-amber-50 backdrop-blur-md shadow-md shadow-neutral-300 border-amber-200 border rounded-lg p-10 mb-8 m-14">
        <div className="footer__container max-w-7xl mx-auto flex justify-center items-center flex-col space-y-3">
          <p className="footer__text text-amber-800 text-2xl font-bold text-center italic underline">Interested in any of these panels?</p>
          <p className="text-amber-800">Contact us for more details:</p>
          <button className="contact-button bg-amber-500 text-white w-full rounded-lg h-12 max-h-12 hover:bg-amber-600 active:bg-amber-700" >Call: (555) 123-4567</button>
        </div>
    </footer>
  )
}