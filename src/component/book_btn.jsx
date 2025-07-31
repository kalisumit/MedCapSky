function BookBtn({ name }) {
  return (
    <div className="w-full flex items-center justify-center">
      <button
        className="
          min-w-[250px]
          bg-gradient-to-r from-[#3beeee] to-[#205ee5]
          hover:from-teal-400 hover:to-indigo-500
          max-w-full px-3 py-2 md:px-5 md:py-3 text-[1rem] md:text-2xl rounded-4xl text-white font-bold
          transition-colors duration-300
          transform-3d hover:scale-105 
        "
      >
        {name || "Book Caretaker"}
      </button>
    </div>
  );
}
export default BookBtn;
