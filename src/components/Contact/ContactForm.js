import React, { useState } from "react";

import {
  Input,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Spinner,
} from "@chakra-ui/react";

import axios from "axios";

// import Whatsapp from "../../icons/Whatsapp";

const ReactOutToUs = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState({
    heading: "",
    text: "",
  });

  const closeModal = () => {
    setIsModalOpen(false);
    setData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const changeHandler = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleWhatsAppClick = (e) => {
  //   e.preventDefault();
  //   console.log("hello");
  //   window.open("https://wa.me/+918007145189", "_blank", "noopener,noreferrer");
  // };

  const sendMessage = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND}addUsers`,
        data
      );
      const { success, message } = res.data;
      if (success) {
        setModal({
          heading: "Sucess!!!",
          text: "Request Submitted. Our team will reach out to you shortly.",
        });
      } else {
        setModal({
          heading: "Something went wrong!!!",
          text: message,
        });
      }
      setIsModalOpen(true);
      setIsLoading(false);
      setData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      setModal({
        heading: "Something went wrong!!!",
        text: error.message,
      });
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Modal onClose={closeModal} size={"sm"} isOpen={isModalOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modal.heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modal.text}</ModalBody>
          <ModalFooter>
            <Button onClick={closeModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal size={"sm"} isOpen={isLoading} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please Wait...</ModalHeader>
          <ModalBody textAlign={"center"} paddingBottom={"3rem"}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      <section className="container my-8 lg:my-16 text-primary">
        <h1
          className={
            "text-quaternary text-2xl lg:text-4xl font-semibold my-4 lg:my-8 text-center"
          }
        >
          Prepared to revolutionize your enterprise with the latest in
          technology?
        </h1>

        <p className={"my-8 text-center text-secondary w-4/5 mx-auto"}>
          Connect with us! The IQSPL team is excited to explore how our
          customized IT solutions can meet your specific requirements. Get in
          touch now to begin shaping your tech-driven success narrative.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <div className={"w-[95%] lg:w-[60%] mx-auto"}>
            <div className={"my-4"}>
              <Input
                variant="outline"
                placeholder={"Full Name"}
                value={data.name}
                name="name"
                onChange={changeHandler}
                required
              />
            </div>

            <div className={"my-4"}>
              <Input
                variant="outline"
                placeholder={"Email ID"}
                value={data.email}
                name="email"
                onChange={changeHandler}
                required
              />
            </div>

            <div className={"my-4"}>
              <Input
                variant="outline"
                type="number"
                placeholder={"Phone Number"}
                value={data.phone}
                name="phone"
                onChange={changeHandler}
                required
              />
            </div>

            <div className={"my-4"}>
              <Textarea
                variant="outline"
                placeholder={"Your Message"}
                value={data.message}
                rows={6}
                resize={"none"}
                name="message"
                onChange={changeHandler}
                required
              />
            </div>

            <div className={"w-full flex justify-center"}>
              <div className={"w-[80%] lg:w-[20rem] flex justify-center"}>
                <button
                  className={`p-[8px] rounded-lg min-w-[136px] font-semibold font-primary bg-tertiary hover:bg-quaternary text-quaternary hover:text-tertiary border-2 border-quaternary transition-all duration-300`}
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* <a
                href="https://wa.me/+918007145189"
                onClick={handleWhatsAppClick}
                rel="noreferrer"
                target="_blank"
              >
                <button
                  className={`p-[8px] rounded-lg min-w-[136px] font-semibold font-primary bg-green-500 hover:bg-tertiary text-tertiary hover:text-green-500 border-2 border-green-500 transition-all duration-300 flex items-center justify-center gap-2`}
                  onClick={() => console.log("hello")}
                >
                  <Whatsapp />
                  WhatsApp
                </button>
              </a> */}
          </div>
        </form>

        <div className="w-[100%] lg:w-[60%] min-h-[12rem] bg-bg-secondary text-secondary rounded-lg mx-auto p-6 mt-14 mb-6">
          <strong>Address :</strong> Venkateshwara House, 1st floor, office 3,
          opp. Kalinga hotel, near Sharda center, off. Karve road,Pune,
          Maharashtra, India 411004
          <br />
          <br />
          <strong>Email : </strong>
          <a href="mailto:manish.mehta@iqspl.com">support@iqspl.com</a> <br />
          <br />
          <strong>Phone :</strong>
          <a href="tel:+918007145189"> 020 25451488</a>
        </div>
      </section>
    </>
  );
};

export default ReactOutToUs;
