import {
  FaCalculator,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold flex items-center">
              <FaCalculator className="mr-2" />
              l i m i t i 
            </h2>
            <p className="text-sm mt-2">
              Simplifying your financial management
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <div className="flex items-center text-sm">
                <FaPhone className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-sm mt-1">
                <FaEnvelope className="mr-2" />
                <span>support@accubooks.com</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} AccuBooks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
