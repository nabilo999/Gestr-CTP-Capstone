// Local SVG artwork only. This component never requests a camera or media stream.
export default function CameraPreview({ className = '' }) {
  return <div className={`camera-placeholder ${className}`}>
    <svg viewBox="0 0 600 380" preserveAspectRatio="none" role="img" aria-label="Static camera placeholder with a hand silhouette">
      <defs>
        <radialGradient id="preview-shade"><stop stopColor="#696b6c" /><stop offset="1" stopColor="#515354" /></radialGradient>
        <linearGradient id="hand-shade" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#dedfdf" /><stop offset="1" stopColor="#bfc0c1" /></linearGradient>
      </defs>
      <rect width="600" height="380" fill="url(#preview-shade)" />
      <path fill="url(#hand-shade)" d="M267 391 L273 315 C275 300 266 290 252 276 C234 257 221 235 213 215 L198 181 C194 171 199 164 207 162 C219 159 226 168 231 178 L248 202 C254 211 266 213 270 198 L252 82 C250 70 256 64 263 64 C273 63 277 70 279 81 L292 156 C293 166 302 166 303 155 L307 65 C307 54 313 49 320 49 C329 49 332 57 332 66 L326 159 C325 169 334 171 338 161 L352 83 C354 74 361 70 368 73 C375 75 377 81 375 91 L357 178 C355 187 362 190 368 182 L391 130 C395 121 402 119 409 123 C416 127 417 134 412 145 L384 218 C377 239 369 258 355 277 C346 289 344 304 347 320 L355 391 Z" />
      <path d="M34 69 V43 Q34 29 48 29 H74 M526 29 H552 Q566 29 566 43 V69 M566 311 V337 Q566 351 552 351 H526 M74 351 H48 Q34 351 34 337 V311" fill="none" stroke="#f5f5f3" strokeWidth="4" strokeLinecap="round" />
    </svg>
  </div>;
}
