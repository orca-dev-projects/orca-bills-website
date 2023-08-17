import { Disclosure } from "@headlessui/react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

const faqs = [
  {
    id: 1,
    question: "Can I customize the Billing system to match my business needs?",
    answer:
      "Yes, many Billing systems offer customization options to tailor the interface, menu items, discounts, and other features to suit your specific business requirements.",
  },

  {
    id: 4,
    question: "How does the Billing system handle inventory management?",
    answer:
      "The Billing system helps you keep track of your inventory in real-time, providing insights into stock levels, alerts for low stock, and options to reorder items when needed.",
  },
  {
    id: 5,
    question:
      "How does the Billing system handle sales reporting and analytics?",
    answer:
      "The Billing system generates detailed reports and analytics that provide insights into sales trends, popular items, peak hours, and revenue generation, helping you make informed business decisions.",
  },
  {
    id: 6,
    question:
      "How can I get technical support if I encounter issues with the Billing system?",
    answer:
      "Reputable Billing providers offer technical support through various channels such as phone, email, and live chat to assist you with any issues or questions you may have.",
  },
  {
    id: 7,
    question: "Can the Billing system be used offline?",
    answer:
      "Some Billing systems offer offline capabilities, allowing you to continue processing transactions even if your internet connection is temporarily unavailable. The data syncs once the connection is restored.",
  },
  {
    id: 9,
    question: "How can I address instances of overcharging or double billing?",
    answer:
      "If a customer is overcharged or double billed, apologize for the error and rectify it promptly. Refund the excess amount or cancel the duplicate charge. Provide the customer with clear communication about the issue and the steps taken to resolve it.",
  },
  {
    id: 10,
    question:
      "How should I handle situations where an item is mistakenly not billed to a customer?",
    answer:
      "If an item is mistakenly not billed to a customer, acknowledge the error and notify the customer. Offer to add the missing item to their bill or provide it free of charge as a gesture of goodwill. Be transparent about the mistake and show that you value their trust.",
  },
  {
    id: 11,
    question:
      "What strategies can I implement to improve overall billing system reliability and accuracy?",
    answer:
      "To enhance billing system reliability and accuracy, conduct regular system audits, train your staff thoroughly, and invest in high-quality hardware and software solutions. Stay updated with the latest industry best practices to ensure your billing system operates smoothly.",
  },
  {
    id: 12,
    question:
      "Can I use an external printer with your Billing billing software?",
    answer:
      "No, our Billing billing software is compatible with our own printers.",
  },
  {
    id: 13,
    question:
      "Can I print multiple copies of a receipt or invoice simultaneously?",
    answer:
      "Yes, you can configure the software to print multiple copies of receipts or invoices based on your preferences. This is useful for providing copies to customers and keeping records.",
  },
  {
    id: 14,
    question:
      "What happens if the external printer encounters a paper jam or error during printing?",
    answer:
      "If the printer encounters an error, the software will handle it gracefully. It will notify you of the error and provide options to reattempt printing or troubleshoot the issue.",
  },
  {
    id: 15,
    question:
      "Is technical support available if I encounter issues with the external printer integration?",
    answer:
      "Yes, our dedicated support team is available to assist you with any technical issues, including printer integration. Feel free to reach out for prompt assistance.",
  },
  // ... more questions and answers can be added here
];

export default function FAQ() {
  return (
    <div id="faq" className="w-full mb-10 px-4 pt-16 font-poppins">
      <div className="mx-auto w-full h-auto  rounded-2xl p-2 text-lg">
        <h1 className="text-center text-4xl py-4 mb-8 text-white">
          Frequently Asked Questions
        </h1>
        {faqs.map((faq) => (
          <Disclosure key={faq.id}>
            {({ open }) => (
              <>
                <div key={faq.id}>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-gradient px-4 py-3 mb-2 text-left font-medium text-black">
                    <span>{faq.question}</span>
                    {open ? <BiMinus /> : <BsPlusLg />}
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-white flex w-full justify-between rounded-lg px-4 mb-2 text-left text-sm font-poppins bg-dimBlue">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
