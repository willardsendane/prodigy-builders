import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import * as UC from '@uploadcare/file-uploader';
import '@uploadcare/file-uploader/web/uc-file-uploader-regular.min.css';
import './DropboxUploadcare.css';

const CTX_NAME = 'client-dropbox';

UC.defineComponents(UC);

const CENTER_STYLE_ID = 'dropbox-uploadcare-center-btn';
const CENTER_STYLE_TEXT = `
  uc-start-from .uc-content {
    justify-items: center !important;
  }
`;

function injectUploaderCenteringStyles(root: Node) {
  const visit = (node: Node) => {
    if (node instanceof Element) {
      if (node.shadowRoot && !node.shadowRoot.getElementById(CENTER_STYLE_ID)) {
        const style = document.createElement('style');
        style.id = CENTER_STYLE_ID;
        style.textContent = CENTER_STYLE_TEXT;
        node.shadowRoot.appendChild(style);
      }
      if (node.shadowRoot) {
        visit(node.shadowRoot);
      }
    }
    node.childNodes.forEach(visit);
  };
  visit(root);
}

type ClientInfo = { fullName: string; projectName: string };

export function DropboxUploadArea() {
  const pubkey = import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY ?? '';
  const configRef = useRef<HTMLElement | null>(null);
  const ctxRef = useRef<HTMLElement | null>(null);
  const uploaderRef = useRef<HTMLElement | null>(null);
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState<string | null>(null);
  const [clientInfo, setClientInfo] = useState<ClientInfo | null>(null);
  const [fullName, setFullName] = useState('');
  const [projectName, setProjectName] = useState('');

  useLayoutEffect(() => {
    if (configRef.current && clientInfo) {
      (configRef.current as HTMLElement & { metadata?: Record<string, string> }).metadata = {
        client_full_name: clientInfo.fullName,
        project_name: clientInfo.projectName,
      };
    }
  }, [clientInfo]);

  useLayoutEffect(() => {
    if (!pubkey || !clientInfo) return;
    const host = uploaderRef.current;
    if (!host) return;

    const run = () => injectUploaderCenteringStyles(host);
    run();
    const timeouts = [0, 50, 200, 500].map((ms) => window.setTimeout(run, ms));
    return () => timeouts.forEach((id) => window.clearTimeout(id));
  }, [pubkey, clientInfo]);

  useEffect(() => {
    const el = ctxRef.current;
    if (!el || !pubkey || !clientInfo) return;

    const onCommonUploadSuccess = () => {
      setUploadSuccessMessage('Your files were uploaded successfully.');
    };

    const onCommonUploadStart = () => {
      setUploadSuccessMessage(null);
    };

    el.addEventListener('common-upload-success', onCommonUploadSuccess);
    el.addEventListener('common-upload-start', onCommonUploadStart);

    return () => {
      el.removeEventListener('common-upload-success', onCommonUploadSuccess);
      el.removeEventListener('common-upload-start', onCommonUploadStart);
    };
  }, [pubkey, clientInfo]);

  const handleContinue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = fullName.trim();
    const project = projectName.trim();
    if (!name || !project) return;
    setClientInfo({ fullName: name, projectName: project });
  };

  const handleUploadMoreFiles = () => {
    setClientInfo(null);
    setFullName('');
    setProjectName('');
    setUploadSuccessMessage(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="rounded-lg border-2 border-dashed border-white/10 bg-[#141410] p-16 text-center space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl tracking-tight" style={{ fontWeight: 900 }}>
            Document Upload Area
          </h3>
          {!pubkey ? (
            <p className="text-foreground/70 tracking-wide max-w-xl mx-auto">
              File uploads are not configured for this environment.
            </p>
          ) : clientInfo ? (
            <p className="text-foreground/70 tracking-wide max-w-xl mx-auto">
              Upload project documents from your device or capture photos with your camera. You can add multiple files in one
              session.
            </p>
          ) : (
            <p className="text-foreground/70 tracking-wide max-w-xl mx-auto">
              Enter your name and project so we can label your uploads. You will open the uploader on the next step.
            </p>
          )}
        </div>

        {!pubkey ? (
          <p className="text-sm text-foreground/60">
            Set <code className="text-[#C9A84C]">VITE_UPLOADCARE_PUBLIC_KEY</code> in your environment.
          </p>
        ) : !clientInfo ? (
          <form
            onSubmit={handleContinue}
            className="mx-auto max-w-md space-y-5 text-left"
            noValidate
          >
            <div className="space-y-2">
              <label htmlFor="dropbox-client-full-name" className="block text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Full name
              </label>
              <input
                id="dropbox-client-full-name"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-md border border-white/15 bg-[#0a0a0a] px-4 py-3 text-sm tracking-wide text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
                placeholder="Jane Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="dropbox-project-name" className="block text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">
                Project name
              </label>
              <input
                id="dropbox-project-name"
                name="projectName"
                type="text"
                autoComplete="organization"
                required
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full rounded-md border border-white/15 bg-[#0a0a0a] px-4 py-3 text-sm tracking-wide text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
                placeholder="e.g. Alpine Manor"
              />
            </div>
            <div className="pt-1">
              <button
                type="submit"
                className="w-full rounded-md bg-[#C9A84C] px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#141410] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141410]"
              >
                Continue to Upload
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <uc-config
              ref={(node) => {
                configRef.current = node;
              }}
              ctx-name={CTX_NAME}
              pubkey={pubkey}
              source-list="local, camera"
              multiple="true"
              use-cloud-image-editor="false"
            />
            <uc-upload-ctx-provider
              ref={(node) => {
                ctxRef.current = node;
              }}
              ctx-name={CTX_NAME}
            />
            <uc-file-uploader-regular
              ref={(node) => {
                uploaderRef.current = node;
              }}
              class="dropbox-uploadcare-theme uc-dark"
              ctx-name={CTX_NAME}
            />
            {uploadSuccessMessage ? (
              <div className="mt-6 flex flex-col items-center gap-4">
                <p className="text-center text-sm font-medium tracking-wide text-[#C9A84C]" role="status">
                  {uploadSuccessMessage}
                </p>
                <button
                  type="button"
                  onClick={handleUploadMoreFiles}
                  className="rounded-md border-2 border-[#C9A84C] bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#C9A84C] transition-colors hover:bg-[#C9A84C]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141410]"
                >
                  Upload More Files
                </button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
