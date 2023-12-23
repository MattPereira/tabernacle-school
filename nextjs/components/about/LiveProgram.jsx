import Image from "next/image";
import { SectionTitle, SectionWrapper } from "@/components/common";

const characterList = [
  {
    title: "Responsible",
    image: "/about/live/responsible.jpg",
    adjectives: {
      Industrious: "Getting your work done",
      Truthful: "Honest and conscientious",
      Productive: "Tangible results from your work",
      Reliable: "Dependable and trustworthy",

      Determined: "Exerting personal effort to complete tasks",
      Persistent: "Nothing stops you from doing the right",
      Ambitious: "Willingness to do the work to be successful",
      Wise: "Showing good judgment and making good choices",
      Servanthood: "Serving others throughout your lifetime",
      Resistance: "Resisting evil and doing wrong",
    },
  },
  {
    title: "Respectful",
    image: "/about/live/respectful.jpg",
    adjectives: {
      Polite: "Well mannered and honoring in your attitude",
      Obedient: "Submitting to your authority",
      Thinking: "Putting God first in your thoughts",
      Leadership: "Being an example for other students",
      Accepting: "Treat others as you would want to be treated",
      Quiet: "Knowing when not to talk and make noise",
      Encouraging: "Working to build the life of someone else",
      Admission: "Owning up to wrong and accepting the consequences",
      Honoring: "Respectful towards your parents and teachers",
      Disciplined: "Keeping the rules and doing right",
    },
  },
  {
    title: "Compassionate",
    image: "/about/live/compassionate.jpg",
    adjectives: {
      Caring: "Kind and considerate",
      Gentle: "Gracious and loving",
      Empathy: "Being aware and sensative to the experiences of others",
      Understanding: "Sympathetic",
      Discrete: "Prudent silence and not gossiping",
      Attentive: "Mindful and observant",
      Friendly: "Warm and accepting",
      Forgiving: "Allowing room for faults and showing mercy",
      Passionate: "Expressing feelings for those in need",
      Selfless: "Sacrficing to help others",
    },
  },
  {
    title: "Cooperative",
    image: "/about/live/cooperative.jpg",
    adjectives: {
      Obedient: "Follow instructions carefully",
      Attentive: "Paying attention",
      Flexible: "Agreeable and adaptable",
      Peaceful: "Calm and untroubled",
      Fair: "Impartial, objective, and reasonable",
      Joyful: "Happy and contended in all circumstances",
      Thankful: "Gratitude and appreciation",
      Positive: "Accepting and affirming to everyone",
      Faithful: "Loyal and steadfast",
      Patient: "Bearing difficult things calmly without complaining",
    },
  },
  {
    title: "Courageous",
    image: "/about/live/courageous.jpg",
    adjectives: {
      Determined: "To know Jesus and make Him known",
      Loving: " Providing for those in need, protecting the disenfranchised",
      Receptive: "Very teachable",
      Disciplined: "Doing the right thing",
      Thinking: "Understand logical consequences of choices",
      Vigilant: "Watchful about personal behavior",
      Brave: "Willing to stand alone for their convictions",
      Decisive: "Able to make good choices quickly",
      Reliable: "Following through on commitments",
      Focused: "Willingly follow Jesus and obeys Him",
    },
  },
];

export default function LiveProgram() {
  return (
    <SectionWrapper>
      <SectionTitle title="Live Program" />

      <p className="text-xl mb-14">
        Teaching character is an important part of our philosophy at Tabernacle
        School. We emphasize five different character traits in our classrooms:
        responsible, respectful, compassionate, cooperative, and courageous.
        Teachers recognize students for showing these character traits in the
        classroom and at quarterly assemblies. If a student shows exceptional
        character in one of these areas a teacher will send them to the office
        for “Caught Being Good”. There they get a sticker that they proudly
        display for the rest of the day. Their name is added to our character
        bulletin board in the lunchroom and a letter is sent home detailing why
        they were sent to the office. Below are some examples of how each
        character trait is displayed in our students.
      </p>

      <div className="carousel w-full">
        {characterList.map((item, index) => (
          <div
            key={item.title}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full justify-center"
          >
            <div>
              <h5 className="text-3xl font-bold pt-5 mb-10 text-center">
                {item.title}
              </h5>

              <div className="flex gap-0 lg:gap-8">
                <div>
                  <div className="">
                    <Image
                      width={500}
                      height={500}
                      className="w-full h-full object-center object-cover rounded-xl hidden lg:block"
                      src={item.image}
                      alt="responsible children reading books"
                    />
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="table text-xl">
                    <tbody>
                      {Object.entries(item.adjectives).map(
                        (adjective, index) => (
                          <tr key={adjective[0]}>
                            <th>{adjective[0]}</th>
                            <td>{adjective[1]}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-8">
              <a
                href={`#slide${index === 0 ? characterList.length : index}`}
                className="btn btn-primary btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${
                  index === characterList.length - 1 ? 1 : index + 2
                }`}
                className="btn btn-primary btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
