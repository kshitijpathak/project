export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  imageUrl: string;
  slug: string; 
  content: string; // <-- ADDED THIS FIELD
}

export const blogs: BlogPost[] = [
  // The first post here will be the "Featured Post"
  {
    id: "1",
    title: "Our First Community Food Forest: A 6-Month Journey",
    category: "Project Stories",
    date: "October 28, 2025",
    author: "Jane Doe",
    excerpt: "From a barren patch of land to a budding ecosystem. We share the lessons, challenges, and triumphs of our first major community project in Koramangala.",
    imageUrl: "https://placehold.co/1200x600/5cb85c/ffffff?text=Our+First+Forest",
    slug: "first-community-food-forest",
    content: `
## From Barren Land to Budding Oasis

When we first scouted the location in Koramangala, it was a 5-acre patch of compacted soil, littered with construction debris. Today, it's a thriving hub of biodiversity. This is the story of how we did it.

### Step 1: Healing the Soil
Before planting a single tree, we had to heal the land. This involved:
* **De-compacting:** Using deep-rooted cover crops to break up the soil.
* **Amending:** Bringing in tons of organic compost and mulch.
* **Mycoremediation:** Introducing beneficial fungi to help detoxify the soil.

### Step 2: The Community Planting Day
On a sunny Saturday in March, over 200 volunteers showed up. We planted over 1,500 native saplings, following a multi-layered food forest design. The energy was incredible.

> "Seeing families and children planting trees together... that's when I knew this was more than just a garden. It's a community." - *Ravi Sharma, Volunteer Lead*

### Step 3: Six Months of Growth
Today, the first ground covers are established, the nitrogen-fixing trees are thriving, and we've already spotted 5 new species of birds. The journey has just begun, but the transformation is proof of our 'Grey to Green' philosophy.
    `
  },
  {
    id: "2",
    title: "5 Native Indian Plants for a Thriving Balcony Garden",
    category: "Gardening Tips",
    date: "October 15, 2025",
    author: "Ravi Sharma",
    excerpt: "Think you don't have space? Think again. We explore five resilient, low-maintenance native plants that can turn any city balcony into a green oasis.",
    imageUrl: "https://placehold.co/600x400/86b049/ffffff?text=Balcony+Greens",
    slug: "native-indian-balcony-plants",
    content: `
## You Don't Need a Yard to Be a Gardener

For city dwellers, the balcony is our connection to nature. Here are 5 resilient, beautiful, and productive native Indian plants perfect for your urban space.

1.  **Curry Leaf (Kadi Patta):** A must-have for any Indian kitchen. It loves sunlight, is very hardy, and provides fresh leaves year-round.
2.  **Holy Basil (Tulsi):** More than a plant, it's a cultural icon. It thrives in pots, purifies the air, and you can use the leaves for tea.
3.  **Marigold (Genda):** Needs full sun, but rewards you with vibrant bursts of color. It's also a fantastic companion plant that deters pests.
4.  **Jasmine (Mogra/Chameli):** The fragrance of a blooming jasmine on a warm evening is unmatched. It's a climber, perfect for a small trellis on your balcony.
5.  **Chili Plant:** Surprisingly easy to grow in pots, a single plant can provide you with a steady supply of fresh, spicy chilies.
    `
  },
  {
    id: "3",
    title: "The 'Grey to Green' Philosophy: Why We Do What We Do",
    category: "Our Mission",
    date: "October 1, 2025",
    author: "Dr. Alok Verma",
    excerpt: "It's not just about planting trees; it's about rebuilding ecosystems and reconnecting communities. Our founder shares the vision behind the foundation.",
    imageUrl: "https://placehold.co/600x400/3e864f/ffffff?text=Our+Philosophy",
    slug: "grey-to-green-philosophy",
    content: `
## It's Not Just About Planting Trees

People often ask, "So, you plant trees?" The answer is yes, but that's only part of the story. Our philosophy is rooted in a deeper goal: **systemic ecological restoration.**

* **Grey** represents the barren, compacted, lifeless urban and industrial land.
* **Green** represents a living, breathing, self-sustaining ecosystem.

Our work is the bridge between the two. We don't just plant trees; we build **food forests**. This means we plant in layers, mimicking a natural forest:

1.  **Canopy Layer:** Large fruit & nut trees.
2.  **Understory Layer:** Smaller dwarf trees, large shrubs.
3.  **Shrub Layer:** Productive berry bushes.
4.  **Herbaceous Layer:** Culinary and medicinal herbs.
5.  **Groundcover Layer:** Creeping plants that protect the soil.
6.  **Vine Layer:** Climbers that use vertical space.
7.  **Root Layer:** Root vegetables.

This approach creates a resilient, biodiverse, and productive ecosystem that heals the soil, attracts wildlife, and feeds the community. That is the 'Grey to Green' mission.
    `
  },
];