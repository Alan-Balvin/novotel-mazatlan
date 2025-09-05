import { useState } from "react";
import type { ContactFormData, InputChangeEvent, FormSubmitEvent, AlertInfo } from "../types/forms";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertInfo, setAlertInfo] = useState<AlertInfo>({ type: "", text: "" });

  const handleChange = (e: InputChangeEvent) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type: string, message: string) => {
    setAlertInfo({ type, text: message }); // <- usamos la interface AlertInfo aquí
    setShowAlert(true);
  };

  const handleSubmit = async (e: FormSubmitEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log("Form submitted", formData);
      await emailjs.send(
        "service_9f9xigo",
        "template_byjjvcw",
        {
          from_name: formData.name,
          to_name: "Eduardo Cancino",
          from_email: formData.email,
          to_email: "paulcancinoramos@gmail.com",
          message: formData.message,
        },
        "BQ4EyX1ynoxN3cO97"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent");
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
      showAlertMessage("error", "Something went wrong!");
    }
  };

  return (
    <section className="relative flex items-center c-space section-spacing">
      {showAlert && <Alert type={alertInfo.type} text={alertInfo.text} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="heading">Let's talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you are looking to develop a BIM object or an Electrical 3D I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="field-input field-input-focus"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
              className="field-input field-input-focus"
              placeholder="your_email@gmail.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="field-input field-input-focus"
              placeholder="message"
              value={formData.message}
              onChange={handleChange}
              autoComplete="message"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
