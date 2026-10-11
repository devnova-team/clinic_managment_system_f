export function HeroDoctorIllustration() {
  return (
    <svg className="h-auto w-full" viewBox="0 0 520 430" role="img" aria-label="Illustration of a friendly doctor">
      <defs>
        <linearGradient id="heroPanel" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#DDF5FF" /><stop offset="1" stopColor="#C8F3E7" /></linearGradient>
        <linearGradient id="coat" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFFFFF" /><stop offset="1" stopColor="#E9F6FF" /></linearGradient>
      </defs>
      <circle cx="386" cy="73" r="76" fill="#CDEEFF" opacity=".62" />
      <circle cx="395" cy="321" r="92" fill="#D5FAE8" opacity=".7" />
      <ellipse cx="264" cy="378" rx="156" ry="18" fill="#B8CED8" opacity=".36" />
      <rect x="88" y="22" width="334" height="338" rx="36" fill="url(#heroPanel)" />
      <circle cx="257" cy="174" r="100" fill="#E6F8FF" opacity=".95" />
      <circle cx="389" cy="84" r="25" fill="#B8F4D0" />
      <path d="M389 72v24M377 84h24" stroke="#159A63" strokeWidth="4" strokeLinecap="round" />
      {/* body / coat */}
      <path d="M170 345c6-74 39-113 86-113s82 39 88 113Z" fill="#0EA5E9" />
      <path d="M207 255l49 47 47-47 26 90H181Z" fill="url(#coat)" />
      <path d="m240 268 16 26 16-26-8-9h-16Z" fill="#E7A67C" />
      <path d="M245 297h22l-4 42h-14Z" fill="#FFFFFF" />
      <path d="M217 315v-21M298 315v-21" stroke="#D2E8F6" strokeWidth="6" strokeLinecap="round" />
      {/* neck and face */}
      <path d="M237 228v27c10 12 30 12 40 0v-27Z" fill="#D99A73" />
      <path d="M205 139c0-39 22-62 53-62 33 0 55 24 55 63v33c0 38-24 65-55 65-29 0-53-28-53-65Z" fill="#F2BB92" />
      <path d="M204 151c-12-15-11-49 3-71 12-22 32-34 57-34 25 0 47 12 58 34 9 17 10 43 3 63l-9-30c-4-20-19-30-34-32-21 15-46 21-67 17l-4 53Z" fill="#283C50" />
      <path d="M218 152c5-7 13-7 18 0M271 152c5-7 13-7 18 0" stroke="#815A49" strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <path d="M246 184c8 6 17 6 25 0" stroke="#B96F5C" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M235 174c2 4 5 6 10 6M272 180c5 0 8-2 10-6" stroke="#D58B69" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* stethoscope */}
      <path d="M222 262v29c0 23 15 39 34 39s34-16 34-39v-29" stroke="#0B789F" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="290" cy="322" r="10" fill="#FFFFFF" stroke="#0B789F" strokeWidth="4" />
      <circle cx="290" cy="322" r="3" fill="#0B789F" />
      {/* floating information cards */}
      <g filter="drop-shadow(0 10px 15px rgba(32,75,95,.12))">
        <rect x="18" y="224" width="157" height="77" rx="17" fill="#FFFFFF" />
        <circle cx="39" cy="246" r="10" fill="#D9FBE8" />
        <path d="m34 246 4 4 7-8" stroke="#16A34A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <text x="55" y="249" fontSize="10" fontWeight="700" fill="#12283E">Care made simple</text>
        <text x="31" y="269" fontSize="8" fill="#64788B">Find a service and book</text>
        <text x="31" y="281" fontSize="8" fill="#64788B">your visit with confidence.</text>
      </g>
      <g filter="drop-shadow(0 10px 15px rgba(32,75,95,.12))">
        <rect x="322" y="300" width="170" height="62" rx="16" fill="#FFFFFF" />
        <circle cx="345" cy="323" r="10" fill="#D9F2FF" />
        <path d="M345 317v12M339 323h12" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
        <text x="362" y="322" fontSize="9.5" fontWeight="700" fill="#12283E">Your care journey</text>
        <text x="362" y="336" fontSize="8" fill="#64788B">Starts right here</text>
      </g>
    </svg>
  );
}

export function ServiceDoctorIllustration({ tone = "blue" }: { tone?: "blue" | "green" | "purple" | "yellow" }) {
  const palette = {
    blue: { bg: "#DDF3FF", halo: "#B5E8FF", coat: "#0284C7" },
    green: { bg: "#DDFBE9", halo: "#B8F4D0", coat: "#16A34A" },
    purple: { bg: "#F0E2FF", halo: "#DFC4FF", coat: "#8B5CF6" },
    yellow: { bg: "#FFF3C4", halo: "#FFE58A", coat: "#D97706" },
  }[tone];
  return (
    <svg className="h-full w-full" viewBox="0 0 180 104" role="img" aria-label="Medical service illustration">
      <rect width="180" height="104" rx="16" fill={palette.bg} />
      <circle cx="90" cy="47" r="34" fill={palette.halo} />
      <path d="M58 104c2-27 14-40 32-40s31 13 33 40" fill="#FFFFFF" />
      <path d="m76 67 14 15 14-15 9 37H67Z" fill={palette.coat} />
      <path d="M83 66h14v14l-7 7-7-7Z" fill="#F0B58C" />
      <path d="M70 37c0-17 9-26 21-26 15 0 23 11 23 27v10c0 18-10 28-23 28S70 65 70 48Z" fill="#EAB18A" />
      <path d="M68 42c-5-22 7-34 23-34 19 0 27 12 25 34l-7-8c-8-1-17-6-23-12-4 6-10 10-18 12Z" fill="#3C4C60" />
      <path d="M78 48h5M98 48h5" stroke="#785347" strokeWidth="2" strokeLinecap="round" />
      <path d="M84 60c4 3 9 3 13 0" stroke="#B76F5C" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function AboutAppIllustration() {
  return (
    <svg className="h-auto w-full" viewBox="0 0 500 420" role="img" aria-label="Illustration of the CarePoint clinic booking platform">
      <rect width="500" height="420" rx="30" fill="#EAF8FF" />
      <circle cx="254" cy="216" r="142" fill="#D2F0FF" />
      <circle cx="89" cy="95" r="22" fill="#B7F3D0" />
      <path d="M89 84v22M78 95h22" stroke="#179D62" strokeWidth="4" strokeLinecap="round" />
      <rect x="102" y="132" width="296" height="194" rx="22" fill="#FFFFFF" stroke="#B7DFF6" strokeWidth="3" />
      <rect x="119" y="149" width="262" height="54" rx="12" fill="#DDF3FF" />
      <rect x="130" y="162" width="29" height="29" rx="8" fill="#0EA5E9" />
      <path d="M144.5 168v17M136 176.5h17" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <text x="170" y="171" fill="#12364F" fontSize="14" fontWeight="700">CarePoint Clinic</text>
      <text x="170" y="188" fill="#688093" fontSize="10">Here for your health</text>
      <rect x="121" y="218" width="81" height="85" rx="10" fill="#E3F1FF" />
      <path d="M137 237h48M137 251h48M137 265h35M137 279h45" stroke="#65C8FA" strokeWidth="5" strokeLinecap="round" />
      <rect x="213" y="218" width="81" height="85" rx="10" fill="#DDFBE9" />
      <path d="M229 237h48M229 251h48M229 265h35M229 279h45" stroke="#6FE0A3" strokeWidth="5" strokeLinecap="round" />
      <rect x="305" y="218" width="64" height="85" rx="10" fill="#E6F6FF" />
      <circle cx="337" cy="256" r="18" fill="#B7E9FF" />
      <path d="M337 245v22M326 256h22" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
      <rect x="222" y="309" width="58" height="21" rx="10.5" fill="#0EA5E9" />
      <text x="251" y="323" fill="#FFFFFF" textAnchor="middle" fontSize="8" fontWeight="700">WELCOME</text>
      <circle cx="403" cy="309" r="24" fill="#FFFFFF" />
      <path d="m392 309 7 7 14-16" stroke="#16A34A" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
