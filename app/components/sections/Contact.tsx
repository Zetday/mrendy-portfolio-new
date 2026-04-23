import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id='contact' className='py-huge'>
      <div className='bg-brand-surface-container-low rounded-3xl p-8 md:p-12 border border-brand-outline-variant custom-shadow'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='space-y-8'>
            <div>
              <h2 className='text-4xl font-bold text-brand-on-surface mb-4 leading-tight'>
                Lets Build <br /> Something Together.
              </h2>
              <p className='text-brand-on-surface-variant leading-relaxed'>
                Currently open for new opportunities and architectural
                consultations. Drop a message and lets discuss your next
                project.
              </p>
            </div>

            <div className='space-y-6'>
              <div className='flex items-center gap-4'>
                <div className='p-3 bg-brand-primary text-white rounded-2xl'>
                  <Mail size={20} />
                </div>
                <div>
                  <div className='text-xs font-bold text-brand-secondary uppercase tracking-widest'>
                    Email
                  </div>
                  <a
                    href='mailto:hello@sophisticated.dev'
                    className='text-brand-on-surface hover:text-brand-primary transition-colors font-medium'
                  >
                    hello@sophisticated.dev
                  </a>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='p-3 bg-brand-primary text-white rounded-2xl'>
                  <MapPin size={20} />
                </div>
                <div>
                  <div className='text-xs font-bold text-brand-secondary uppercase tracking-widest'>
                    Location
                  </div>
                  <div className='text-brand-on-surface font-medium'>
                    San Francisco, CA (Remote)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className='glass-panel p-8 rounded-2xl border border-white shadow-xl space-y-4'>
            <div>
              <label className='block text-sm font-bold text-brand-on-surface mb-1.5 ml-1'>
                Name
              </label>
              <input
                type='text'
                placeholder='Jane Doe'
                className='w-full bg-white border border-brand-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all'
              />
            </div>
            <div>
              <label className='block text-sm font-bold text-brand-on-surface mb-1.5 ml-1'>
                Email
              </label>
              <input
                type='email'
                placeholder='jane@example.com'
                className='w-full bg-white border border-brand-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all'
              />
            </div>
            <div>
              <label className='block text-sm font-bold text-brand-on-surface mb-1.5 ml-1'>
                Message
              </label>
              <textarea
                rows={4}
                placeholder='Tell me about your project...'
                className='w-full bg-white border border-brand-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all resize-none'
              />
            </div>
            <button className='w-full bg-brand-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-primary/90 transition-all custom-shadow'>
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
