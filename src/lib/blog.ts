import firstPost from '../content/blog/first-post.md?raw';
// Import other posts similarly

// Parse frontmatter function
function parseFrontmatter(markdown: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(markdown);
  
  if (!match) return { frontmatter: {}, content: markdown };
  
  const frontmatterBlock = match[1];
  const content = markdown.replace(frontmatterRegex, '').trim();
  const frontmatterLines = frontmatterBlock.split('\n');
  const frontmatter: Record<string, any> = {};
  
  frontmatterLines.forEach(line => {
    const [key, ...valueArr] = line.split(':');
    if (key && valueArr) {
      let valueString = valueArr.join(':').trim();
      let value: string | string[];
      
      // Handle arrays in frontmatter (like categories)
      if (valueString.startsWith('[') && valueString.endsWith(']')) {
        value = valueString.slice(1, -1).split(',').map(item => 
          item.trim().replace(/["']/g, '')
        );
      } else {
        // Remove quotes if present
        value = valueString.replace(/^["'](.*)["']$/, '$1');
      }
      
      frontmatter[key.trim()] = value;
    }
  });
  
  return { frontmatter, content };
}

// Create a map of all posts
const allPosts = [
  { slug: 'first-post', raw: firstPost },
  // Add other posts here
];

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
  image?: string;
  categories?: string[];
}

export function getAllPosts(): Post[] {
  return allPosts.map(post => {
    const { frontmatter, content } = parseFrontmatter(post.raw);
    return {
      slug: post.slug,
      title: frontmatter.title || post.slug,
      date: frontmatter.date || new Date().toISOString(),
      excerpt: frontmatter.excerpt || content.substring(0, 150) + '...',
      content,
      image: frontmatter.image,
      categories: frontmatter.categories || [],
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const post = allPosts.find(p => p.slug === slug);
  if (!post) return null;
  
  const { frontmatter, content } = parseFrontmatter(post.raw);
  return {
    slug: post.slug,
    title: frontmatter.title || post.slug,
    date: frontmatter.date || new Date().toISOString(),
    excerpt: frontmatter.excerpt || content.substring(0, 150) + '...',
    content,
    image: frontmatter.image,
    categories: frontmatter.categories || [],
  };
}