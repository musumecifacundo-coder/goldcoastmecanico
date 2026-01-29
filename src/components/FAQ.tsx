import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "¿Qué pasa si el auto no arranca o no tiene Rego?",
        answer: "No hay problema. Como soy mecánico móvil, voy hasta donde está el auto. Si no tiene Rego, no podemos hacer prueba de manejo en calle pública, pero puedo inspeccionar todo lo demás."
    },
    {
        question: "¿Necesito estar presente durante la inspección?",
        answer: "No es obligatorio. Puedo coordinar con el vendedor directamente y enviarte el reporte digital con fotos y videos. Pero si podés venir, mejor, así te explico todo en persona."
    },
    {
        question: "¿Qué incluye el reporte digital?",
        answer: "Incluye fotos de fallas encontradas, resultados del escáner OBD2, estado de neumáticos, frenos, fluidos y una estimación de gastos inminentes."
    },
    {
        question: "¿Cómo pago el servicio?",
        answer: "Acepto transferencia bancaria (PayID) o efectivo al finalizar la inspección. Para zonas lejanas, pido un depósito previo."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-zinc-950">
            <div className="max-w-3xl mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
                <p className="text-zinc-400">Todo lo que necesitás saber antes de contratar.</p>
            </div>

            <div className="max-w-2xl mx-auto px-4">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800/50 transition-colors"
                            >
                                <span className="font-medium text-white flex items-center gap-3">
                                    <HelpCircle className="w-5 h-5 text-yellow-500" />
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-zinc-500" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-zinc-500" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-zinc-800/50">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
