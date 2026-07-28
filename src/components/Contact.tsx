/**
 * Contact Component
 *
 * Minimalist contact form with terminal-style aesthetics.
 *
 * Features:
 * - Clean form with name, email, and message fields
 * - Form validation
 * - Loading states
 * - Success/error feedback
 * - Direct contact links (email, LinkedIn, GitHub)
 * - Consistent with portfolio design language
 *
 * @component
 * @example
 * ```tsx
 * <Contact isDark={true} />
 * ```
 */

import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Linkedin, Github, Send } from "lucide-react";

interface ContactProps {
  isDark: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact({ isDark }: ContactProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation (min 3 characters)
    if (formData.name.trim().length < 3) {
      newErrors.name = t("contact.form.errors.nameMin");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = t("contact.form.errors.emailInvalid");
    }

    // Message validation (min 10 characters)
    if (formData.message.trim().length < 10) {
      newErrors.message = t("contact.form.errors.messageMin");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setStatus("loading");
    setErrors({});

    try {
      // Send email via FormSubmit
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);
      form.append("_subject", `Novo contato de ${formData.name}`);
      form.append("_captcha", "false"); // Disable captcha
      form.append("_template", "table"); // Nice email format

      const response = await fetch(
        "https://formsubmit.co/otaviozanonn@icloud.com",
        {
          method: "POST",
          body: form,
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("FormSubmit error");
      }
    } catch (error) {
      console.error("FormSubmit Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "otaviozanonn@icloud.com",
      href: "mailto:otaviozanonn@icloud.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/otavio-zanon",
      href: "https://linkedin.com/in/otavio-zanon-820512183",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@otaviozanon",
      href: "https://github.com/otaviozanon",
    },
  ];

  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-12"
        >
          <motion.h2
            className={`text-2xl font-medium transition-colors duration-300 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {t("contact.title")}
          </motion.h2>
          <motion.p
            className={`mt-2 text-sm transition-colors duration-300 ${
              isDark ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            {t("contact.subtitle")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className={`block text-xs mb-2 transition-colors duration-300 ${
                    isDark ? "text-neutral-500" : "text-neutral-500"
                  }`}
                >
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  minLength={3}
                  required
                  className={`w-full px-4 py-2.5 text-sm rounded-none border transition-colors duration-300 ${
                    errors.name
                      ? "border-red-500"
                      : isDark
                        ? "bg-black border-neutral-800 text-white focus:border-white"
                        : "bg-white border-neutral-200 text-black focus:border-black"
                  } outline-none`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className={`block text-xs mb-2 transition-colors duration-300 ${
                    isDark ? "text-neutral-500" : "text-neutral-500"
                  }`}
                >
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2.5 text-sm rounded-none border transition-colors duration-300 ${
                    errors.email
                      ? "border-red-500"
                      : isDark
                        ? "bg-black border-neutral-800 text-white focus:border-white"
                        : "bg-white border-neutral-200 text-black focus:border-black"
                  } outline-none`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className={`block text-xs mb-2 transition-colors duration-300 ${
                    isDark ? "text-neutral-500" : "text-neutral-500"
                  }`}
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  minLength={10}
                  required
                  rows={6}
                  className={`w-full px-4 py-2.5 text-sm rounded-none border transition-colors duration-300 resize-none ${
                    errors.message
                      ? "border-red-500"
                      : isDark
                        ? "bg-black border-neutral-800 text-white focus:border-white"
                        : "bg-white border-neutral-200 text-black focus:border-black"
                  } outline-none`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-6 py-3 text-sm font-medium rounded-none border transition-all duration-300 flex items-center justify-center gap-2 ${
                  isDark
                    ? "bg-white text-black border-white hover:bg-black hover:text-white"
                    : "bg-black text-white border-black hover:bg-white hover:text-black"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {status === "loading" ? (
                  <span>{t("contact.form.sending")}</span>
                ) : status === "success" ? (
                  <span>{t("contact.form.sent")}</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>{t("contact.form.submit")}</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-red-500"
                >
                  {t("contact.form.error")}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3
                className={`text-sm font-medium mb-4 transition-colors duration-300 ${
                  isDark ? "text-neutral-500" : "text-neutral-500"
                }`}
              >
                {t("contact.direct.title")}
              </h3>
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("mailto:") ? "_self" : "_blank"
                    }
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 3 }}
                    className={`flex items-center gap-3 p-4 border transition-all duration-300 ${
                      isDark
                        ? "border-neutral-800 hover:border-white"
                        : "border-neutral-200 hover:border-black"
                    }`}
                  >
                    <link.icon
                      size={18}
                      className={`transition-colors duration-300 ${
                        isDark ? "text-neutral-500" : "text-neutral-500"
                      }`}
                    />
                    <div className="flex-1">
                      <div
                        className={`text-xs transition-colors duration-300 ${
                          isDark ? "text-neutral-500" : "text-neutral-500"
                        }`}
                      >
                        {link.label}
                      </div>
                      <div
                        className={`text-sm transition-colors duration-300 ${
                          isDark ? "text-white" : "text-black"
                        }`}
                      >
                        {link.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
