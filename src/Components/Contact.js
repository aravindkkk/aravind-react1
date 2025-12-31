const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl">Contact Us Page</h1>
            <span>Phone: 123-456-7890</span>
            <div>
            <input type="text" className="p-1.5 border-4" placeholder="name" />
            <input type="text" className="p-1.5 border-4" placeholder="password" />
            <button className="cursor-pointer ">Submit</button>
            </div>
        </div>
    );
}

export default Contact;