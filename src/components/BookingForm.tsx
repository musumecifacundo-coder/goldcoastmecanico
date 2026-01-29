import { useState } from 'react';
import { Calendar, Car, MapPin, User, CheckCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function BookingForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // Form states
    const [formData, setFormData] = useState({
        name: '',
        carModel: '',
        location: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Check if config is valid (simple check)
            const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;

            if (!apiKey || apiKey === "" || apiKey === "mock_key") {
                console.warn("Firebase not configured. Simulating success.");
                await new Promise(resolve => setTimeout(resolve, 1500));
                setSuccess(true);
                setLoading(false);
                return;
            }

            await addDoc(collection(db, "bookings"), {
                ...formData,
                createdAt: serverTimestamp(),
                status: 'pending'
            });
            setSuccess(true);
        } catch (error) {
            console.error("Error booking:", error);
            alert("Hubo un error al enviar la reserva. Por favor intentá de nuevo.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="booking" className="py-24 bg-zinc-950 border-t border-zinc-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Agendá tu inspección ahora</h2>
                        <p className="text-zinc-400 mb-8 leading-relaxed">
                            No dejes pasar esa oportunidad. Los buenos autos se venden rápido en Gold Coast. Reservá tu turno y asegurate de que todo esté en orden.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-zinc-300">
                                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                                    <User className="w-5 h-5 text-yellow-500" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Atención Personalizada</h4>
                                    <p className="text-sm text-zinc-500">Hablamos tu idioma.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-zinc-300">
                                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                                    <Calendar className="w-5 h-5 text-yellow-500" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Disponibilidad Rápida</h4>
                                    <p className="text-sm text-zinc-500">Turnos en 24-48hs.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-2xl">
                        {success ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">¡Solicitud Enviada!</h3>
                                <p className="text-zinc-400">Te voy a contactar en breve por WhatsApp para confirmar los detalles.</p>
                                <button
                                    onClick={() => setSuccess(false)}
                                    className="mt-8 text-yellow-500 text-sm font-medium hover:underline"
                                >
                                    Enviar otra consulta
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Tu Nombre</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3.5 w-5 h-5 text-zinc-600" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Juan Pérez"
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all placeholder:text-zinc-700"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Auto a revisar (Modelo/Año)</label>
                                    <div className="relative">
                                        <Car className="absolute left-3 top-3.5 w-5 h-5 text-zinc-600" />
                                        <input
                                            type="text"
                                            name="carModel"
                                            value={formData.carModel}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ej: Toyota Corolla 2008"
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all placeholder:text-zinc-700"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Ubicación del Auto</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-zinc-600" />
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ej: Southport"
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all placeholder:text-zinc-700"
                                        />
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-4 bg-yellow-500 hover:bg-yellow-400 text-zinc-900 font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        ) : (
                                            "Confirmar Reserva"
                                        )}
                                    </button>
                                </div>

                                <p className="text-center text-xs text-zinc-600 pt-2">
                                    No se cobra nada hasta confirmar el turno.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
