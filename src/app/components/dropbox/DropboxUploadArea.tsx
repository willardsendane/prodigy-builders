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

export function DropboxUploadArea() {
  const pubkey = import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY ?? '';
  const ctxRef = useRef<HTMLElement | null>(null);
  const uploaderRef = useRef<HTMLElement | null>(null);
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState<string | null>(null);

  useLayoutEffect(() => {
    if (!pubkey) return;
    const host = uploaderRef.current;
    if (!host) return;

    const run = () => injectUploaderCenteringStyles(host);
    run();
    const timeouts = [0, 50, 200, 500].map((ms) => window.setTimeout(run, ms));
    return () => timeouts.forEach((id) => window.clearTimeout(id));
  }, [pubkey]);

  useEffect(() => {
    const el = ctxRef.current;
    if (!el || !pubkey) return;

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
  }, [pubkey]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="rounded-lg border-2 border-dashed border-white/10 bg-[#141410] p-16 text-center space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl tracking-tight" style={{ fontWeight: 900 }}>
            Document Upload Area
          </h3>
          <p className="text-foreground/70 tracking-wide max-w-xl mx-auto">
            Upload project documents from your device or capture photos with your camera. You can add multiple files in one session.
          </p>
        </div>

        {!pubkey ? (
          <p className="text-sm text-foreground/60">
            File uploads are not configured. Set <code className="text-[#C9A84C]">VITE_UPLOADCARE_PUBLIC_KEY</code> in your
            environment.
          </p>
        ) : (
          <div className="text-center">
            <uc-config
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
              <p className="mt-4 text-center text-sm font-medium tracking-wide text-[#C9A84C]" role="status">
                {uploadSuccessMessage}
              </p>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
