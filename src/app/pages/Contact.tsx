import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Calendar, ChevronLeft, ChevronRight, Clock } from 'lucide-react';

export const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    projectType: '',
    budget: ''
  });

  // Calendar State
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [view, setView] = useState<'calendar' | 'time'>('calendar');

  const handleNext = () => setStep(step + 1);

  // Calendar Helpers
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const startOffset = (firstDayOfMonth + 6) % 7; // Mon start
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const changeMonth = (offset: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
    setSelectedDate(null);
    setView('calendar');
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newDate);
    setView('time'); // Switch to time view
  };

  const timeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

  return (
    <div className="bg-neutral-950 min-h-screen text-white pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Let's talk business.</h1>
          <p className="text-xl text-neutral-400">Fill out the form below or schedule a call directly.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <div className="bg-neutral-900 p-8 rounded-2xl border border-white/5">
             <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full text-sm font-medium border border-indigo-500/20 mb-6">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Typical reply time: within 48 hours
             </div>
             <div className="flex gap-2 mb-8">
               {[1, 2, 3].map(i => (
                 <div key={i} className={`h-1 flex-1 rounded-full ${i <= step ? 'bg-indigo-500' : 'bg-neutral-800'}`} />
               ))}
             </div>

             <div className="min-h-[300px]">
               {step === 1 && (
                 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                   <h3 className="text-2xl font-bold mb-6">What's your email?</h3>
                   <input 
                     type="email" 
                     placeholder="name@company.com" 
                     className="w-full bg-transparent border-b border-neutral-700 text-2xl py-4 focus:border-indigo-500 focus:outline-none transition-colors mb-8"
                     value={formData.email}
                     onChange={(e) => setFormData({...formData, email: e.target.value})}
                   />
                   <Button onClick={handleNext} disabled={!formData.email}>Next Step</Button>
                 </motion.div>
               )}

               {step === 2 && (
                 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                   <h3 className="text-2xl font-bold mb-6">What kind of project?</h3>
                   <div className="grid grid-cols-2 gap-4 mb-8">
                     {['Video Editing', 'Motion Graphics', 'Graphic Design', 'Websites & IT', 'Marketing', 'Social Media'].map(type => (
                       <button
                         key={type}
                         onClick={() => setFormData({...formData, projectType: type})}
                         className={`p-4 rounded-lg border text-left transition-all ${formData.projectType === type ? 'border-indigo-500 bg-indigo-500/10' : 'border-neutral-700 hover:border-neutral-500'}`}
                       >
                         {type}
                       </button>
                     ))}
                   </div>
                   <Button onClick={handleNext} disabled={!formData.projectType}>Next Step</Button>
                 </motion.div>
               )}

               {step === 3 && (
                 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                   <h3 className="text-2xl font-bold mb-6">What's your budget?</h3>
                   <div className="space-y-4 mb-8">
                     {['$5k - $10k', '$10k - $25k', '$25k - $50k', '$50k+'].map(budget => (
                       <button
                         key={budget}
                         onClick={() => setFormData({...formData, budget: budget})}
                         className={`w-full p-4 rounded-lg border text-left transition-all ${formData.budget === budget ? 'border-indigo-500 bg-indigo-500/10' : 'border-neutral-700 hover:border-neutral-500'}`}
                       >
                         {budget}
                       </button>
                     ))}
                   </div>
                   <Button onClick={() => alert('Form Submitted!')} disabled={!formData.budget}>Submit Request</Button>
                 </motion.div>
               )}
             </div>
          </div>

          {/* Schedule Widget */}
          <div className="bg-white text-black p-8 rounded-2xl relative overflow-hidden group min-h-[500px]">
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             
             <h3 className="text-2xl font-bold mb-2">Schedule a Call</h3>
             <p className="text-neutral-600 mb-8">Directly book a 15-min intro call.</p>
             
             <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100 shadow-sm relative overflow-hidden h-full max-h-[400px]">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center gap-4">
                     <img
                       src="/assets/aistudio/image_867abc8b.png"
                       alt="Myrix Logo"
                       className="w-12 h-12 rounded-full bg-neutral-950 p-1.5 object-contain"
                     />
                     <div>
                       <div className="font-bold">Myrix Agency</div>
                       <div className="text-sm text-neutral-500">15 min Discovery Call</div>
                     </div>
                   </div>
                </div>

                <AnimatePresence mode="wait">
                {view === 'calendar' ? (
                    <motion.div 
                        key="calendar"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                         {/* Month Nav */}
                        <div className="flex justify-between items-center mb-4 px-2">
                             <button onClick={() => changeMonth(-1)} className="p-1 hover:bg-neutral-200 rounded-full transition-colors"><ChevronLeft size={20}/></button>
                             <span className="font-bold select-none">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
                             <button onClick={() => changeMonth(1)} className="p-1 hover:bg-neutral-200 rounded-full transition-colors"><ChevronRight size={20}/></button>
                        </div>

                        <div className="grid grid-cols-7 gap-1 text-center text-sm mb-4">
                          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                            <div key={i} className="text-neutral-400 font-medium text-xs py-2 select-none">{d}</div>
                          ))}
                          {Array.from({length: startOffset}).map((_, i) => (
                            <div key={`empty-${i}`} />
                          ))}
                          {Array.from({length: daysInMonth}).map((_, i) => {
                             const day = i + 1;
                             const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === currentDate.getMonth();
                             const isToday = new Date().getDate() === day && new Date().getMonth() === currentDate.getMonth() && new Date().getFullYear() === currentDate.getFullYear();
                             
                             return (
                                <button 
                                  key={day} 
                                  onClick={() => handleDateClick(day)}
                                  className={`p-2 rounded-full w-8 h-8 flex items-center justify-center text-sm transition-all mx-auto
                                    ${isSelected ? 'bg-indigo-600 text-white shadow-lg scale-110' : 'hover:bg-neutral-200'}
                                    ${isToday && !isSelected ? 'text-indigo-600 font-bold bg-indigo-50' : ''}
                                  `}
                                >
                                  {day}
                                </button>
                             );
                          })}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="time"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <button className="flex items-center gap-2 mb-4 text-neutral-500 cursor-pointer hover:text-black text-sm" onClick={() => setView('calendar')}>
                            <ChevronLeft size={16} /> Back to Calendar
                        </button>
                        <h4 className="font-bold mb-4">Select Time for {selectedDate?.toLocaleDateString()}</h4>
                        <div className="grid grid-cols-2 gap-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                            {timeSlots.map(time => (
                                <button
                                    key={time}
                                    onClick={() => setSelectedTime(time)}
                                    className={`p-3 rounded-lg border text-sm font-medium transition-all ${selectedTime === time ? 'bg-indigo-600 text-white border-indigo-600' : 'border-neutral-200 hover:border-indigo-300'}`}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>
                
                <div className="mt-6 pt-6 border-t border-neutral-100">
                    <Button 
                        className="w-full bg-black text-white hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!selectedDate || (view === 'time' && !selectedTime)}
                        onClick={() => alert(`Booked for ${selectedDate?.toLocaleDateString()} at ${selectedTime}`)}
                    >
                        {selectedTime ? 'Confirm Booking' : view === 'time' ? 'Select a Time' : 'Select a Date'}
                    </Button>
                </div>
             </div>
          </div>
        </div>


      </div>
    </div>
  );
};
