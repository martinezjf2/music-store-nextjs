// Make sure this component is usable for all pages for guitars, drums, and more
import React from "react";
import Item from "./Item";

export default function AllList({ store }) {
  // const itemList = store.items.map(item => <Item item={item} />)
  // const contentList = store.content.map(p => <p className="">{p}</p>)

  return (
    <>
      <section className="mx-auto relative px-10 py-6 ">
        <div>
          <a href="/">Home</a> / <span className="font-bold">{store.name}</span>
        </div>
        <div className="text-[40px] font-bold tracking-wider py-4">
          {store.name}
        </div>
        <div className="flex">
          <div className="w-1/6">This is the search section</div>
          <div className="w-5/6 flex justify-center items-center bg-gray-100 p-3">
            <Item
              item={{
                name: "Epiphone Thunderbird '64 Bass",
                description:
                  "adfkj asdfkja bds fkjadf kja dfkjasn dfk jan dfkjna df",
                price: "849.00",
                image:
                  "https://media.guitarcenter.com/is/image/MMGS7/Thunderbird-64-Bass-Inverness-Green/M04078000003000-00-264x264.jpg",
              }}
            />
            <Item
              item={{
                name: "Epiphone Thunderbird '64 Bass",
                description:
                  "adfkj asdfkja bds fkjadf kja dfkjasn dfk jan dfkjna df",
                price: "849.00",
                image:
                  "https://media.guitarcenter.com/is/image/MMGS7/Thunderbird-64-Bass-Inverness-Green/M04078000003000-00-264x264.jpg",
              }}
            />
            <Item
              item={{
                name: "Epiphone Thunderbird '64 Bass",
                description:
                  "adfkj asdfkja bds fkjadf kja dfkjasn dfk jan dfkjna df",
                price: "849.00",
                image:
                  "https://media.guitarcenter.com/is/image/MMGS7/Thunderbird-64-Bass-Inverness-Green/M04078000003000-00-264x264.jpg",
              }}
            />
            <Item
              item={{
                name: "Epiphone Thunderbird '64 Bass",
                description:
                  "adfkj asdfkja bds fkjadf kja dfkjasn dfk jan dfkjna df",
                price: "849.00",
                image:
                  "https://media.guitarcenter.com/is/image/MMGS7/Thunderbird-64-Bass-Inverness-Green/M04078000003000-00-264x264.jpg",
              }}
            />
          </div>
        </div>
      </section>

      <section className="pt-9">
        <div className="px-9 pb-9 pt-6 border-t-2 border-gray-200 w-5/6 mx-auto">
          <p className="font-extralight pb-5">
            Electric guitars have been popular and prominent for decades. For
            quite some time, being a left-handed musician was considered a
            hindrance and artists often had to make due with a right handed
            guitar. Now, there are plenty of fantastic options for lefties so
            they can make their mark on the music world. As a left-handed
            musician you probably know that many legendary artists were lefties
            too- Paul McCartney, Jimi Hendrix, Kurt Cobain, and Dick Dale are
            just a few examples of musicians who paved the way for up and coming
            lefties to seriously rock out. Electric guitars are perhaps the most
            notable and distinctive instrument in pop and rock music. Heavily
            used on stage and in the recording studio, the electric guitar
            provides some of the most memorable parts of a song or tune.
          </p>

          <p className="font-extralight pb-5">
            Whether you're picking up a guitar for the first time in your life
            or have been rocking the stage for years, there is a left-handed
            instrument out there that's just right for you. Electric guitar
            design and construction varies depending on the size of the body and
            shape of the neck, tonewood, bridge and pickup. Different woods
            produce different tones. Higher end guitars are usually made of
            hardwood like alder, maple or mahogany while a plywood or pine
            option gives exceptional durability perfectly suited to a beginner
            or student musician. The guitar's body typically comes in solid
            body, hollow body or semi-hollow body. Harder rock musicians often
            favor a solid body for louder, more vibrant pickups and feedback,
            while an acoustic performance would benefit from an acoustic guitar.
            The neck of a guitar is another consideration. A shorter neck would
            generally be seen on a smaller guitar; a musician who does not have
            large hands would appreciate the easier handling of a smaller
            guitar. The majority of electric guitars have six strings; however
            there are seven, eight and 12 string options for those who have
            mastered their left-handed guitar and are looking for ways to boost
            their performance. Left handed guitarists have made a rich and
            impressive mark on the history of popular music. No matter if you
            plan to rock the stage in front of an adoring crowd or just want to
            riff with your buddies at home, there is a sensational left-handed
            guitar out there waiting for you.
          </p>
        </div>
      </section>
    </>
  );
}
