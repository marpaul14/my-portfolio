function Contact() {
  return (
    <div
      name="contact"
      className="bg-[#D3D3D3] w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/66fdaf41-87cf-405e-8171-2297ecd141a2"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#0a192f] text-#0a192f">
            Contact me here:
          </p>
          <p className="text-stone-300 text-lg pt-4">
            Submit the form below or shoot me an email -
            marpauljaybunani1314@gmail.com
          </p>
        </div>
        <input
          className="bg-yellow-800 p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-yellow-800"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#0a192f] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          className="text-[#0a192f] border-2 border-[#0a192f] hover:bg-[#0a192f] hover:text-white
         hover:font-bold px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let&apos;s Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
