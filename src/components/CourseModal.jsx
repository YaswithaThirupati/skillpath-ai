import React from 'react';
import { X, CheckCircle2, Clock, Users, Star, Award, Sparkles, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CourseModal({ course, onClose, onEnroll, isEnrolled }) {
  if (!course) return null;

  const handleEnrollClick = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}
    onEnroll(course);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-2xl max-h-[90vh] glass-panel-glow rounded-3xl border border-purple-500/40 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-purple-950/40 to-slate-900 border-b border-slate-800 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300 bg-purple-950/80 px-2.5 py-0.5 rounded-full border border-purple-800/40">
                {course.badge}
              </span>
              <span className="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full">
                {course.level}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {course.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              {course.description}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          
          {/* Instructor & Stats */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-3">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-12 h-12 rounded-full object-cover border border-purple-500/40"
              />
              <div>
                <span className="text-xs text-slate-400">Curriculum Architect</span>
                <h4 className="text-sm font-bold text-white">{course.instructor.name}</h4>
                <p className="text-xs text-purple-300">{course.instructor.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" /> {course.duration}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-purple-400" /> {course.students} Learners
              </span>
              <span className="flex items-center gap-1 text-amber-400 font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400" /> {course.rating} ★
              </span>
            </div>
          </div>

          {/* Core Competencies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Technologies Covered
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {course.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-lg bg-purple-950/50 text-purple-200 border border-purple-800/40 text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Syllabus Modules */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" /> Complete Module Syllabus
            </h4>

            <div className="space-y-2.5">
              {course.syllabus.map((item) => (
                <div
                  key={item.week}
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3 hover:border-purple-500/30 transition-colors"
                >
                  <span className="px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 text-xs font-bold border border-purple-800/40 shrink-0">
                    Week {item.week}
                  </span>
                  <div className="flex-1 text-xs sm:text-sm text-slate-200 font-medium">
                    {item.title}
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-white">{course.price}</span>
              <span className="text-xs text-slate-500 line-through">{course.originalPrice}</span>
            </div>
            <span className="text-[10px] text-emerald-400">Includes 24/7 AI tutor & certificate</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
            >
              Close
            </button>
            <button
              onClick={handleEnrollClick}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-bold shadow-lg shadow-purple-900/40"
            >
              {isEnrolled ? 'Already Enrolled' : 'Enroll in Course'}
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
