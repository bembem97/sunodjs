const parallax = `export default function Parallax() {
  return (
    <div className="wrapper">
      <header>
        <img
          src="https://images.unsplash.com/photo-1612353238806-d588a88cb474?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
          alt="mountain"
          className="background"
        />
        <img src="https://cdn.pixabay.com/photo/2016/02/04/13/49/the-earth-1179212_960_720.png" alt="trees" className="foreground" />
        <h1 className="h1">Parallax</h1>
      </header>

      <section>
        Sunt incididunt eiusmod veniam cupidatat sunt non velit labore. Laboris
        nisi velit nulla ea amet labore Lorem exercitation ut nulla. Consequat
        ea esse consectetur minim anim do dolore proident. Cillum officia nulla
        deserunt tempor consequat deserunt occaecat. Excepteur eiusmod sunt amet
        cillum incididunt id nulla velit ullamco fugiat sunt. Mollit Lorem
        fugiat ut duis anim nisi aute eu laboris consectetur sit. Consequat sunt
        aliquip aliquip deserunt dolor pariatur reprehenderit reprehenderit esse
        id magna. Sit anim proident amet dolore occaecat ea exercitation mollit.
        Nulla velit commodo reprehenderit ipsum ex in laborum tempor laborum
        ipsum id. Eu aliquip ad magna dolore aliquip incididunt. Voluptate
        aliquip ullamco occaecat commodo sint eu ut aute in et labore ex et id.
        Nisi nisi Lorem do cupidatat sunt aliquip eiusmod. Eiusmod aliqua Lorem
        officia do aute anim dolore nisi labore. Dolor adipisicing mollit nisi
        ipsum elit ad. Irure non magna nisi ut qui consequat magna. Pariatur
        anim officia aute qui. Tempor qui aliquip ullamco mollit amet eiusmod id
        tempor ex. Consequat excepteur officia culpa ullamco proident sint
        incididunt ad ut sunt sint aliqua esse. Dolor qui id est mollit nulla
        aute sint enim magna occaecat sit aute. Duis ex consequat dolor pariatur
        sint dolor ullamco. Et id Lorem ea esse quis enim culpa elit. Aliquip
        elit deserunt culpa consequat deserunt pariatur sint irure proident
        tempor. Cillum aliquip do ad cupidatat. Qui voluptate irure dolor nisi
        ullamco laborum voluptate. Esse reprehenderit sit commodo ad proident
        duis. Pariatur est do sit Lorem in in id qui. Fugiat esse ad irure aute
        nulla aliquip nostrud veniam occaecat. Veniam eiusmod culpa velit et
        nulla exercitation adipisicing culpa labore ullamco velit. Ex do laboris
        minim laborum irure veniam non amet laborum ipsum deserunt nisi. Dolor
        do incididunt adipisicing amet proident id magna culpa veniam est sit.
        Labore velit nostrud dolor elit reprehenderit elit occaecat non
        excepteur. Deserunt exercitation ullamco consectetur ut esse nulla. Non
        aliquip quis officia eiusmod proident anim aute consectetur in laborum
        exercitation in do occaecat. Fugiat et ipsum esse nisi. Velit ad
        deserunt labore aute est commodo quis velit voluptate tempor dolor.
        Lorem fugiat sint sint ullamco magna fugiat aliqua qui enim minim
        consequat laborum magna. Officia quis magna minim labore officia velit
        occaecat ea irure nostrud velit officia. Sunt ad qui anim exercitation
        laborum velit adipisicing amet consequat amet consequat pariatur mollit
        in. Do adipisicing tempor qui cillum exercitation nulla. Velit aute et
        veniam in veniam excepteur magna qui deserunt officia aliquip. Aliqua
        elit Lorem labore ea irure irure ea minim irure. Elit reprehenderit
        labore ea velit ut sint in. Incididunt nulla commodo ipsum ex laboris
        sit tempor occaecat nulla culpa qui tempor et. Cupidatat minim cillum
        laborum reprehenderit incididunt nisi in pariatur ipsum tempor irure
        irure nulla magna. Mollit est deserunt ut ullamco nostrud esse sit.
        Commodo nostrud do amet excepteur exercitation. Anim occaecat enim minim
        nostrud. Pariatur in et commodo consequat commodo ullamco non labore
        adipisicing. Duis tempor eu deserunt dolor magna cupidatat deserunt
        velit duis. Et nisi qui excepteur adipisicing Lorem dolor proident
        labore eiusmod mollit. Irure eu deserunt excepteur eiusmod officia
        reprehenderit. Laborum pariatur occaecat laboris dolore labore culpa do
        exercitation anim consectetur commodo anim. Dolore id do Lorem mollit
        minim occaecat nulla eiusmod amet eiusmod magna non proident. Irure
        reprehenderit pariatur ipsum non. Labore incididunt aliquip est in.
        Veniam sint dolor excepteur anim non. Culpa ea nulla ipsum magna veniam
        sint dolor ipsum. Enim reprehenderit occaecat id consequat nulla ut
        ullamco nisi cupidatat duis magna ex pariatur minim. Consequat
        incididunt enim elit ad.
      </section>
    </div>
  )
}

`

export const styles = `body {
  margin: 0;
}

h1.h1 {
  padding: 4px 8px;
  border-radius: 4px;
  background-color: forestgreen;
  color: white
}

.wrapper {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  perspective: 10px;
}

header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transform-style: preserve-3d;
  z-index: -1;
}

section {
  background: rgb(25, 25, 25);
  color: white;
  padding: 1rem 2rem;
}

.background {
  transform: translateZ(-10px) scale(2);
}

.foreground {
  transform: translateZ(-5px) scale(0.5);
  height: initial !important;'
}

.foreground,
.background {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
}

img {
  display: block;
  width: 100%;
  height: auto;
}
`

export default parallax
