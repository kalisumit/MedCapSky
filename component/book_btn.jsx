function BookBtn({ name }) {
  return (
    <div className="w-full flex items-center justify-center">
      <button
        className="
          bg-gradient-to-r from-indigo-500 to-teal-400
          hover:from-teal-400 hover:to-indigo-500
          max-w-full px-3 py-2 md:px-5 md:py-3 text-[1rem] md:text-xl rounded-4xl text-white font-bold
          transition-colors duration-300
          transform  hover:scale-105
        "
      >
        {name || "Book Caretaker"}
      </button>
    </div>
  );
}
export default BookBtn;