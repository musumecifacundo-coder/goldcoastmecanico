import { useState } from 'react';
import { MapPin, Calculator as CalcIcon, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ZONES = {
    A: { price: 150, suburbs: ["Miami", "Burleigh Heads", "Burleigh Waters", "Mermaid Beach", "Broadbeach", "Varsity Lakes", "Robina", "Clear Island Waters"] },
    B: { price: 180, suburbs: ["Surfers Paradise", "Main Beach", "Southport", "Ashmore", "Nerang", "Palm Beach", "Currumbin", "Elanora", "Tugun"] },
    C: { price: 220, suburbs: ["Coolangatta", "Tweed Heads", "Benowa", "Bundall", "Mudgeeraba", "Worongary"] },
    D: { price: null, suburbs: ["Helensvale", "Coomera", "Hope Island", "Runaway Bay", "Brisbane", "Byron Bay"] } // Requires quote
};

export default function Calculator() {
    const [selectedSuburb, setSelectedSuburb] = useState('');
    const [result, setResult] = useState<{ zone: string, price: number | null } | null>(null);

    const suburbsList = Object.values(ZONES).flatMap(z => z.suburbs).sort();

    const calculatePrice = () => {
        if (!selectedSuburb) return;

        // Find zone
        let foundZone = null;
        let foundPrice = null;

        for (const [zone, data] of Object.entries(ZONES)) {
            if (data.suburbs.includes(selectedSuburb)) {
                foundZone = zone;
                foundPrice = data.price;
                break;
            }
        }

        if (foundZone) {
            setResult({ zone: foundZone, price: foundPrice });
        } else {
            setResult({ zone: 'Unknown', price: 999 }); // Should not happen with dropdown
        }
    };

    return (
        <section id="calculator" className="py-24 bg-zinc-900 border-y border-zinc-800">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-white mb-8">Calculadora de Tarifas</h2>
                <p className="text-zinc-400 mb-12">
                    Ingresá el barrio donde está el auto para ver el costo de la inspección.
                    <br />
                    <span className="text-sm text-yellow-500/80">Base: Miami, QLD.</span>
                </p>

                <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 shadow-xl max-w-lg mx-auto">
                    <div className="flex flex-col gap-4">
                        <label className="text-left text-sm font-medium text-zinc-300">Ubicación del Auto</label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-zinc-500" />
                            <select
                                value={selectedSuburb}
                                onChange={(e) => {
                                    setSelectedSuburb(e.target.value);
                                    setResult(null);
                                }}
                                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none appearance-none"
                            >
                                <option value="">Seleccioná un barrio...</option>
                                {suburbsList.map(s => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            onClick={calculatePrice}
                            disabled={!selectedSuburb}
                            className="w-full py-3 bg-white text-zinc-900 font-bold rounded-xl hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            <CalcIcon className="w-5 h-5" />
                            Calcular Precio
                        </button>
                    </div>

                    <AnimatePresence>
                        {result && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mt-8 pt-6 border-t border-zinc-800"
                            >
                                {result.price ? (
                                    <div>
                                        <span className="block text-zinc-400 text-sm mb-1">Precio Estimado</span>
                                        <div className="text-4xl font-bold text-yellow-500 mb-2">${result.price}</div>
                                        <div className="text-sm text-zinc-500 flex items-center justify-center gap-1">
                                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                                            Incluye traslado e inspección completa
                                        </div>
                                        <a href="#booking" className="mt-6 block w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-zinc-900 font-bold rounded-xl transition-colors">
                                            Reservar Ahora
                                        </a>
                                    </div>
                                ) : (
                                    <div>
                                        <span className="block text-zinc-400 text-sm mb-1">Zona Extendida</span>
                                        <div className="text-2xl font-bold text-white mb-2">Consultar Precio</div>
                                        <p className="text-sm text-zinc-500 mb-4">Este barrio está un poco más lejos, pero voy igual. Escribime para coordinar.</p>
                                        <a href="#booking" className="block w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl transition-colors">
                                            Pedir Cotización
                                        </a>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
