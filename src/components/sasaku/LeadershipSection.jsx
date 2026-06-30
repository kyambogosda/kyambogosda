import SectionHeader from "./SectionHeader";
import profImg from "../../assets/executives/prof.jpg";
import brightImg from "../../assets/executives/bright.jpg";
import lillianImg from "../../assets/executives/lillian.png";
import lunyoloImg from "../../assets/executives/lunyolo.jpg";
import ajamboImg from "../../assets/executives/ajambo.jpg";
import akulluImg from "../../assets/executives/ruth.jpg";
import edegaImg from "../../assets/executives/edega.jpg";
import thierryImg from "../../assets/executives/thierry.jpg";
import mwesigwaImg from "../../assets/executives/mwesigwa.jpg";
import linetImg from "../../assets/executives/linet.jpg";
import miriamImg from "../../assets/executives/miriam.jpg";
import alfredImg from "../../assets/executives/alfred.jpg";
import abbeImg from "../../assets/executives/abbe.jpg";
import gloriousImg from "../../assets/executives/glorious.jpg";
import graceImg from "../../assets/executives/grace .jpg";
import deborahImg from "../../assets/executives/deborah.jpg";
import emmaImg from "../../assets/executives/emma.jpg";
import kiptoImg from "../../assets/executives/ivan.jpg";
import shanonImg from "../../assets/executives/shanon.jpg";

const executives = [
  { name: "Prof. Maurice Mukokoma", role: "Patron", img: profImg },
  { name: "Akandwanaho Bright", role: "President", img: brightImg },
  { name: "Nalunkuuma Lillian", role: "Vice President", img: lillianImg },
  {
    name: "Lunyolo Elizabeth",
    role: "General Secretary",
    img: lunyoloImg,
  },
  { name: "Ajambo Bright", role: "Treasurer", img: ajamboImg },
  { name: "Akullu Ruth", role: "In-reach Coordinator", img: akulluImg },
  { name: "Edega Marvin", role: "Out-reach Coordinator", img: edegaImg },
  {
    name: "Munderi Thierry",
    role: "Publicity Secretary",
    img: thierryImg,
  },
  { name: "Mwesigwa Daniel", role: "Music Director", img: mwesigwaImg },
  {
    name: "Nangira Linet",
    role: "Assistant Music Director",
    img: linetImg,
  },
  {
    name: "Ayiko Miriam",
    role: "Social and Welfare Director",
    img: miriamImg,
  },
  {
    name: "Nsamba Alfred",
    role: "Assistant Social and Welfare",
    img: alfredImg,
  },
  { name: "Katusime Deborah Abbe", role: "Librarian", img: abbeImg },
  {
    name: "Ampire Glorious",
    role: "Non-Resident Coordinator",
    img: gloriousImg,
  },
  {
    name: "Nyamungu Grace",
    role: "Resident Coordinator-West End",
    img: graceImg,
  },
  {
    name: "Nakabuye Deborah",
    role: "Resident Coordinator-East End",
    img: deborahImg,
  },
  {
    name: "Ogwang Emmanuel",
    role: "Kyambogo College Coordinator",
    img: emmaImg,
  },
  {
    name: "Kipto Ivan",
    role: "Kyambogo College Coordinator",
    img: kiptoImg,
  },
  {
    name: "MG. Ssenkuba Shanon",
    role: "Associate Coordinator",
    img: shanonImg,
  },
];

function LeadershipSection() {
  return (
    <section className="py-20 bg-white" id="leadership">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Executive Committee"
          title="SASAKU Leadership"
          subtitle="Servant leaders elected to guide and serve the SASAKU family for the term 2026/2027."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {executives.map((p) => (
            <div
              key={p.name}
              className="bg-slate-50 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            >
              <div className="h-40 bg-slate-800 flex items-center justify-center">
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.role}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-heading text-5xl text-sky-400">
                    {p.name.charAt(p.name.indexOf(" ") + 1)}
                  </span>
                )}
              </div>
              <div className="p-4 border-t-4 border-sky-600">
                <h3 className="font-heading text-slate-800 font-bold text-sm leading-snug">
                  {p.name}
                </h3>
                <p className="text-sky-600 text-xs uppercase tracking-widest font-semibold mt-1">
                  {p.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeadershipSection;
