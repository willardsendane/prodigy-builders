import { Upload, FileText, Lock, FolderOpen } from 'lucide-react';

export function DropboxContent() {
  return (
    <section className="bg-[#0a0a0a] py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <p className="text-xs md:text-sm tracking-[0.3em] text-foreground/70 mb-6">
            SECURE & ORGANIZED
          </p>
          <h2 className="text-4xl md:text-5xl mb-8 tracking-tight font-['Blair_ITC']" style={{ fontWeight: 900 }}>
            Your Project Documents,<br />
            <span style={{ color: '#c9a961' }}>Always Accessible.</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed tracking-wide">
            Welcome to the Prodigy Builders Client Portal. Access contracts, blueprints, permits, 
            change orders, and project updates all in one secure, centralized location.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-accent/30 mb-4">
              <Upload className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-['Blair_ITC'] tracking-tight" style={{ fontWeight: 900 }}>
              Easy Upload
            </h3>
            <p className="text-sm text-foreground/70 tracking-wide leading-relaxed">
              Drag and drop files or browse to upload documents quickly.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-accent/30 mb-4">
              <Lock className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-['Blair_ITC'] tracking-tight" style={{ fontWeight: 900 }}>
              Secure Storage
            </h3>
            <p className="text-sm text-foreground/70 tracking-wide leading-relaxed">
              Bank-level encryption keeps your sensitive documents protected.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-accent/30 mb-4">
              <FolderOpen className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-['Blair_ITC'] tracking-tight" style={{ fontWeight: 900 }}>
              Organized Access
            </h3>
            <p className="text-sm text-foreground/70 tracking-wide leading-relaxed">
              All project files organized by category and date for easy retrieval.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-accent/30 mb-4">
              <FileText className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-['Blair_ITC'] tracking-tight" style={{ fontWeight: 900 }}>
              Version Control
            </h3>
            <p className="text-sm text-foreground/70 tracking-wide leading-relaxed">
              Track document revisions and always access the latest versions.
            </p>
          </div>
        </div>

        {/* Placeholder for Future Dropbox Functionality */}
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-dashed border-white/10 rounded-lg p-16 text-center space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 border border-accent/30">
              <Upload className="w-10 h-10 text-accent" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-['Blair_ITC'] tracking-tight" style={{ fontWeight: 900 }}>
                Document Upload Area
              </h3>
              <p className="text-foreground/70 tracking-wide max-w-xl mx-auto">
                This is a template placeholder. Document upload and management functionality 
                will be implemented here with secure file storage, download capabilities, 
                and client-specific access controls.
              </p>
            </div>

            <div className="pt-4">
              <button className="px-10 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 tracking-wider text-sm">
                COMING SOON
              </button>
            </div>
          </div>
        </div>

        {/* Instructions Section */}
        <div className="max-w-3xl mx-auto mt-24 space-y-8">
          <p className="text-xs md:text-sm tracking-[0.3em] text-foreground/70 text-center">
            HOW IT WORKS
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                <span className="text-accent font-['Blair_ITC']" style={{ fontWeight: 900 }}>1</span>
              </div>
              <div>
                <h4 className="text-lg font-['Blair_ITC'] mb-2" style={{ fontWeight: 900 }}>
                  Log In Securely
                </h4>
                <p className="text-sm text-foreground/70 tracking-wide leading-relaxed">
                  Access your personalized portal with your unique credentials provided by your project manager.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                <span className="text-accent font-['Blair_ITC']" style={{ fontWeight: 900 }}>2</span>
              </div>
              <div>
                <h4 className="text-lg font-['Blair_ITC'] mb-2" style={{ fontWeight: 900 }}>
                  Browse or Upload
                </h4>
                <p className="text-sm text-foreground/70 tracking-wide leading-relaxed">
                  View existing project documents or upload new files like design selections, permits, or updated plans.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                <span className="text-accent font-['Blair_ITC']" style={{ fontWeight: 900 }}>3</span>
              </div>
              <div>
                <h4 className="text-lg font-['Blair_ITC'] mb-2" style={{ fontWeight: 900 }}>
                  Stay Updated
                </h4>
                <p className="text-sm text-foreground/70 tracking-wide leading-relaxed">
                  Receive notifications when new documents are added and track your project's progress in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
