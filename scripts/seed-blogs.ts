/**
 * Seed SEO-optimized Blog Posts to Sanity
 * Run with: npx tsx scripts/seed-blogs.ts
 */

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

interface TextSegment {
  text: string
  link?: { href: string; target?: string }
}

interface BlockSection {
  style: string
  segments: TextSegment[]
}

function createBlockContent(sections: BlockSection[]) {
  return sections.map((section, index) => {
    const markDefs: any[] = []
    const children: any[] = []

    section.segments.forEach((segment, segIndex) => {
      if (segment.link) {
        const markKey = `link-${index}-${segIndex}`
        markDefs.push({
          _type: 'link',
          _key: markKey,
          href: segment.link.href,
          target: segment.link.target || '_blank',
        })
        children.push({
          _type: 'span',
          _key: `span-${index}-${segIndex}`,
          text: segment.text,
          marks: [markKey],
        })
      } else {
        children.push({
          _type: 'span',
          _key: `span-${index}-${segIndex}`,
          text: segment.text,
          marks: [],
        })
      }
    })

    return {
      _type: 'block',
      _key: `block-${index}`,
      style: section.style,
      children,
      markDefs,
    }
  })
}

// Helper to create simple text block
function text(content: string): BlockSection {
  return { style: 'normal', segments: [{ text: content }] }
}

function h2(content: string): BlockSection {
  return { style: 'h2', segments: [{ text: content }] }
}

function h3(content: string): BlockSection {
  return { style: 'h3', segments: [{ text: content }] }
}

// Helper to create text with links
function textWithLinks(...segments: TextSegment[]): BlockSection {
  return { style: 'normal', segments }
}

const blogPosts = [
  {
    _id: 'blog-wordpress-security-guide',
    _type: 'blogPost',
    title: '7 Essential WordPress Security Tips for 2024',
    slug: { _type: 'slug', current: 'wordpress-security-tips-2024' },
    excerpt: 'Protect your WordPress site from hackers with these 7 proven security tips. Learn how to secure your website and keep your data safe in 2024.',
    primaryKeyword: 'WordPress security',
    secondaryKeywords: ['WordPress security tips', 'secure WordPress site', 'WordPress malware protection', 'WordPress firewall'],
    category: 'security',
    author: 'The WordPress Team',
    publishedAt: new Date().toISOString(),
    content: createBlockContent([
      text('WordPress security is more important than ever in 2024. With over 40% of the web running on WordPress, it has become a prime target for hackers and malicious actors. In this comprehensive guide, we will share 7 essential WordPress security tips that will help you protect your website from threats.'),
      text('Whether you are running a small blog or a large e-commerce site, these security measures are crucial for keeping your data and your visitors safe. Let us dive into the actionable steps you can take today to secure your WordPress site.'),
      h2('1. Keep WordPress Core, Themes, and Plugins Updated'),
      text('One of the most fundamental WordPress security tips is keeping everything updated. Updates often include security patches that fix vulnerabilities discovered by developers or security researchers. Running outdated software is like leaving your front door unlocked.'),
      text('We recommend enabling automatic updates for minor WordPress releases and regularly checking for theme and plugin updates. At The WordPress Team, we handle all updates for our clients, testing them in staging environments first to ensure compatibility.'),
      h2('2. Use Strong, Unique Passwords and Two-Factor Authentication'),
      text('Weak passwords are responsible for a significant percentage of WordPress hacks. Ensure all user accounts, especially administrators, use strong passwords with a mix of uppercase, lowercase, numbers, and special characters.'),
      textWithLinks(
        { text: 'Additionally, implement two-factor authentication (2FA) for an extra layer of WordPress security. Plugins like ' },
        { text: 'Wordfence', link: { href: 'https://www.wordfence.com/', target: '_blank' } },
        { text: ' or ' },
        { text: 'Google Authenticator', link: { href: 'https://wordpress.org/plugins/google-authenticator/', target: '_blank' } },
        { text: ' make this easy to set up. This means even if someone obtains your password, they still cannot access your site without the second verification factor.' }
      ),
      h2('3. Install a WordPress Security Plugin'),
      textWithLinks(
        { text: 'A quality security plugin provides essential protection including firewall rules, malware scanning, and login attempt monitoring. Popular options include ' },
        { text: 'Wordfence', link: { href: 'https://www.wordfence.com/', target: '_blank' } },
        { text: ', ' },
        { text: 'Sucuri', link: { href: 'https://sucuri.net/', target: '_blank' } },
        { text: ', and ' },
        { text: 'iThemes Security', link: { href: 'https://ithemes.com/security/', target: '_blank' } },
        { text: '.' }
      ),
      text('These plugins can block malicious traffic before it reaches your site and alert you to potential security issues. However, having a plugin installed is not enough—it needs to be properly configured and monitored.'),
      h2('4. Implement SSL/HTTPS Encryption'),
      textWithLinks(
        { text: 'SSL certificates encrypt data transmitted between your website and visitors. This is essential for WordPress security, especially if you collect any user information or process payments. Google also uses HTTPS as a ranking factor, making it important for SEO. Most hosting providers now offer free SSL certificates through ' },
        { text: "Let's Encrypt", link: { href: 'https://letsencrypt.org/', target: '_blank' } },
        { text: '.' }
      ),
      text('Make sure to properly configure your site to use HTTPS and redirect all HTTP traffic to the secure version.'),
      h2('5. Regular Backups Are Your Safety Net'),
      textWithLinks(
        { text: 'Even with the best WordPress security measures in place, things can go wrong. Regular backups ensure you can quickly recover your site if it gets compromised. Use plugins like ' },
        { text: 'UpdraftPlus', link: { href: 'https://updraftplus.com/', target: '_blank' } },
        { text: ' or ' },
        { text: 'BlogVault', link: { href: 'https://blogvault.net/', target: '_blank' } },
        { text: ' to automate your backups.' }
      ),
      textWithLinks(
        { text: 'Store backups in multiple locations—ideally both on your server and in cloud storage like ' },
        { text: 'Amazon S3', link: { href: 'https://aws.amazon.com/s3/', target: '_blank' } },
        { text: ' or ' },
        { text: 'Google Cloud', link: { href: 'https://cloud.google.com/storage', target: '_blank' } },
        { text: '. Test your backups periodically to ensure they work when you need them.' }
      ),
      h2('6. Limit Login Attempts and Change Default Settings'),
      text('Brute force attacks try thousands of username and password combinations to gain access. Limiting login attempts blocks these attacks after a certain number of failed tries.'),
      text('Also, change your WordPress login URL from the default /wp-admin/ and never use "admin" as your username. These simple changes significantly reduce your attack surface.'),
      h2('7. Choose Secure Hosting and Monitor Your Site'),
      text('Your hosting provider plays a crucial role in WordPress security. Choose a reputable host that offers server-level firewalls, malware scanning, and automatic security updates.'),
      text('Finally, monitor your site for unusual activity. Watch for unexpected file changes, new admin users, or suspicious traffic patterns. Early detection can prevent a minor issue from becoming a major breach.'),
      h2('Frequently Asked Questions'),
      h3('How often should I update my WordPress site?'),
      text('We recommend checking for updates weekly at minimum. Security updates should be applied as soon as possible, ideally within 24-48 hours of release.'),
      h3('Is WordPress secure out of the box?'),
      text('WordPress core is reasonably secure, but additional measures are needed. Most vulnerabilities come from outdated plugins, weak passwords, or poor hosting.'),
      h3('What should I do if my WordPress site gets hacked?'),
      text('First, do not panic. Restore from a clean backup, change all passwords, scan for malware, and update everything. Consider hiring professionals like The WordPress Team for thorough cleanup and hardening.'),
      h3('Do I need a security plugin if I have managed hosting?'),
      text('Managed hosting provides server-level security, but a WordPress security plugin adds application-level protection. We recommend using both for comprehensive coverage.'),
      h3('How much does WordPress security cost?'),
      text('Basic security measures are free, but professional monitoring and maintenance typically costs $50-200/month. This investment is far less than the cost of recovering from a hack.'),
      h2('Conclusion: Take WordPress Security Seriously'),
      text('WordPress security is not a one-time task but an ongoing process. By implementing these 7 essential tips, you significantly reduce your risk of being hacked and protect your valuable content and user data.'),
      text('If managing WordPress security feels overwhelming, The WordPress Team is here to help. Our maintenance plans include 24/7 security monitoring, daily backups, and immediate malware removal—so you can focus on your business while we protect your site.'),
    ]),
  },
  {
    _id: 'blog-wordpress-speed-optimization',
    _type: 'blogPost',
    title: 'How to Speed Up WordPress: 10 Proven Methods',
    slug: { _type: 'slug', current: 'speed-up-wordpress-performance' },
    excerpt: 'Discover 10 proven methods to speed up your WordPress site. Improve page load times, boost SEO rankings, and provide a better user experience.',
    primaryKeyword: 'speed up WordPress',
    secondaryKeywords: ['WordPress performance', 'WordPress optimization', 'fast WordPress site', 'WordPress page speed'],
    category: 'performance',
    author: 'The WordPress Team',
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
    content: createBlockContent([
      text('Want to speed up WordPress and improve your site\'s performance? You are in the right place. A fast website is essential for user experience, SEO rankings, and conversions. Studies show that a 1-second delay in page load time can result in a 7% reduction in conversions.'),
      text('In this guide, we will walk you through 10 proven methods to speed up WordPress. These techniques are used by professionals and can dramatically improve your page load times.'),
      h2('1. Choose Quality Web Hosting'),
      text('Your hosting provider is the foundation of your WordPress performance. Cheap shared hosting often means slow servers shared with hundreds of other sites. For better speed, consider managed WordPress hosting or VPS solutions.'),
      text('Look for hosts that offer SSD storage, PHP 8+, HTTP/2, and server-side caching. The investment in quality hosting pays off in faster load times and better reliability.'),
      h2('2. Use a Lightweight, Fast Theme'),
      textWithLinks(
        { text: 'Many WordPress themes are bloated with features you will never use. Choose a theme optimized for speed. Themes like ' },
        { text: 'GeneratePress', link: { href: 'https://generatepress.com/', target: '_blank' } },
        { text: ', ' },
        { text: 'Astra', link: { href: 'https://wpastra.com/', target: '_blank' } },
        { text: ', and ' },
        { text: 'Kadence', link: { href: 'https://www.kadencewp.com/', target: '_blank' } },
        { text: ' are known for their lightweight code and fast loading times.' }
      ),
      text('Avoid multipurpose themes with hundreds of options—they are often performance killers.'),
      h2('3. Implement Caching'),
      text('Caching stores a static version of your pages so WordPress does not have to regenerate them for every visitor. This is one of the most effective ways to speed up WordPress.'),
      textWithLinks(
        { text: 'Use a caching plugin like ' },
        { text: 'WP Rocket', link: { href: 'https://wp-rocket.me/', target: '_blank' } },
        { text: ', ' },
        { text: 'W3 Total Cache', link: { href: 'https://wordpress.org/plugins/w3-total-cache/', target: '_blank' } },
        { text: ', or ' },
        { text: 'LiteSpeed Cache', link: { href: 'https://wordpress.org/plugins/litespeed-cache/', target: '_blank' } },
        { text: '. Configure page caching, browser caching, and object caching for maximum performance.' }
      ),
      h2('4. Optimize Your Images'),
      text('Images often account for 50-80% of a page\'s total size. Unoptimized images are one of the biggest WordPress performance problems. Always compress images before uploading.'),
      textWithLinks(
        { text: 'Use tools like ' },
        { text: 'ShortPixel', link: { href: 'https://shortpixel.com/', target: '_blank' } },
        { text: ', ' },
        { text: 'Imagify', link: { href: 'https://imagify.io/', target: '_blank' } },
        { text: ', or ' },
        { text: 'Smush', link: { href: 'https://wordpress.org/plugins/wp-smushit/', target: '_blank' } },
        { text: ' to automatically compress images. Implement lazy loading so images only load when they enter the viewport, and serve images in modern formats like WebP.' }
      ),
      h2('5. Use a Content Delivery Network (CDN)'),
      text('A CDN stores copies of your site on servers around the world. When someone visits your site, they receive content from the nearest server, reducing latency and load times.'),
      textWithLinks(
        { text: 'Popular CDN options include ' },
        { text: 'Cloudflare', link: { href: 'https://www.cloudflare.com/', target: '_blank' } },
        { text: ' (which has a free tier), ' },
        { text: 'BunnyCDN', link: { href: 'https://bunny.net/', target: '_blank' } },
        { text: ', and ' },
        { text: 'KeyCDN', link: { href: 'https://www.keycdn.com/', target: '_blank' } },
        { text: '. Most caching plugins integrate easily with CDNs, making setup straightforward.' }
      ),
      h2('6. Minimize and Combine CSS/JavaScript'),
      text('Multiple CSS and JavaScript files mean multiple HTTP requests, each adding to your load time. Minifying removes unnecessary characters, while combining merges files together.'),
      textWithLinks(
        { text: 'Plugins like ' },
        { text: 'Autoptimize', link: { href: 'https://wordpress.org/plugins/autoptimize/', target: '_blank' } },
        { text: ' or ' },
        { text: 'WP Rocket', link: { href: 'https://wp-rocket.me/', target: '_blank' } },
        { text: ' handle this automatically. Be careful with JavaScript combining though—test thoroughly as it can sometimes break functionality.' }
      ),
      h2('7. Clean Up Your Database'),
      text('Over time, your WordPress database accumulates clutter: post revisions, spam comments, transients, and orphaned metadata. This bloat slows down database queries.'),
      textWithLinks(
        { text: 'Use ' },
        { text: 'WP-Optimize', link: { href: 'https://wordpress.org/plugins/wp-optimize/', target: '_blank' } },
        { text: ' or ' },
        { text: 'Advanced Database Cleaner', link: { href: 'https://wordpress.org/plugins/developer/developer/', target: '_blank' } },
        { text: ' to remove unnecessary data. Schedule regular cleanups to keep your database lean and fast.' }
      ),
      h2('8. Limit Plugin Usage'),
      text('Each plugin adds code to your site. While plugins are useful, too many can significantly slow down WordPress. Audit your plugins regularly and remove any you do not actively use.'),
      text('When choosing plugins, check reviews for mentions of performance impact. One feature-rich plugin is often better than five single-purpose plugins.'),
      h2('9. Enable GZIP Compression'),
      text('GZIP compression reduces the size of files sent from your server to visitors\' browsers. This can reduce transfer sizes by 70% or more, making a noticeable difference in how you speed up WordPress.'),
      text('Most caching plugins enable GZIP automatically. You can also add compression rules to your .htaccess file or nginx configuration.'),
      h2('10. Optimize Your WordPress Database Tables'),
      text('Beyond cleaning unnecessary data, you should periodically optimize your database tables. This reorganizes data and reclaims unused space, improving query performance.'),
      text('phpMyAdmin includes an optimize function, or you can use a plugin like WP-DBManager. Schedule this monthly for best results.'),
      h2('Frequently Asked Questions'),
      h3('What is a good page load time for WordPress?'),
      text('Aim for under 2 seconds. Google considers 2.5 seconds or less as good for Core Web Vitals. Under 1 second is excellent and achievable with proper optimization.'),
      h3('Which caching plugin is best for WordPress?'),
      textWithLinks(
        { text: '' },
        { text: 'WP Rocket', link: { href: 'https://wp-rocket.me/', target: '_blank' } },
        { text: ' is the most user-friendly premium option. For free alternatives, ' },
        { text: 'LiteSpeed Cache', link: { href: 'https://wordpress.org/plugins/litespeed-cache/', target: '_blank' } },
        { text: ' (on LiteSpeed servers) or ' },
        { text: 'W3 Total Cache', link: { href: 'https://wordpress.org/plugins/w3-total-cache/', target: '_blank' } },
        { text: ' offer excellent performance.' }
      ),
      h3('Does speed affect SEO rankings?'),
      text('Yes, page speed is a confirmed Google ranking factor. Core Web Vitals, which include loading performance, are part of Google\'s page experience signals.'),
      h3('How do I test my WordPress speed?'),
      textWithLinks(
        { text: 'Use tools like ' },
        { text: 'Google PageSpeed Insights', link: { href: 'https://pagespeed.web.dev/', target: '_blank' } },
        { text: ', ' },
        { text: 'GTmetrix', link: { href: 'https://gtmetrix.com/', target: '_blank' } },
        { text: ', or ' },
        { text: 'Pingdom', link: { href: 'https://tools.pingdom.com/', target: '_blank' } },
        { text: '. Test from different locations and test multiple pages, not just your homepage.' }
      ),
      h3('Can too many plugins slow down WordPress?'),
      text('Yes, but quality matters more than quantity. A few poorly coded plugins can slow you down more than many well-optimized ones. Always evaluate plugin performance impact.'),
      h2('Conclusion: Speed Up WordPress Today'),
      text('Implementing these 10 methods will dramatically speed up WordPress and improve your site\'s performance. Start with the basics—hosting, caching, and image optimization—then work through the other optimizations.'),
      text('If you want professional help optimizing your WordPress site, The WordPress Team offers comprehensive performance optimization as part of our maintenance plans. We will audit your site, implement these optimizations, and continuously monitor performance.'),
    ]),
  },
  {
    _id: 'blog-wordpress-backup-guide',
    _type: 'blogPost',
    title: 'WordPress Backup Guide: How to Protect Your Site',
    slug: { _type: 'slug', current: 'wordpress-backup-guide' },
    excerpt: 'Learn how to backup WordPress properly with this complete guide. Discover the best backup strategies, plugins, and schedules to protect your website.',
    primaryKeyword: 'WordPress backup',
    secondaryKeywords: ['backup WordPress site', 'WordPress backup plugin', 'how to backup WordPress', 'WordPress restore'],
    category: 'maintenance',
    author: 'The WordPress Team',
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
    content: createBlockContent([
      text('A WordPress backup could be the difference between a minor inconvenience and a catastrophic loss of your website. Whether it is a hacker attack, a failed update, or human error, things can go wrong. Having a reliable backup means you can restore your site quickly and get back to business.'),
      text('In this comprehensive WordPress backup guide, we will cover everything you need to know: what to backup, how often, which plugins to use, and how to store your backups safely.'),
      h2('Why WordPress Backups Are Essential'),
      text('Many site owners do not think about backups until disaster strikes. By then, it is too late. Here are common scenarios where a WordPress backup saves the day:'),
      text('Hacking attacks that corrupt or delete your content. Plugin or theme updates that break your site. Server failures or hosting issues. Accidental deletion of important pages or posts. Database corruption from various causes.'),
      text('Without a backup, recovering from these situations can be impossible or extremely expensive. With a good backup strategy, recovery takes minutes instead of days.'),
      h2('What to Include in Your WordPress Backup'),
      text('A complete WordPress backup includes two main components: your files and your database. Missing either means an incomplete backup that cannot fully restore your site.'),
      h3('WordPress Files'),
      text('Your WordPress files include: wp-content folder (themes, plugins, uploads), WordPress core files, .htaccess and wp-config.php configuration files, and any custom files you have added.'),
      h3('WordPress Database'),
      text('Your database contains all your content: posts, pages, comments, user accounts, settings, and plugin data. Without the database, your site would be an empty shell.'),
      h2('How Often Should You Backup WordPress?'),
      text('Your backup WordPress frequency depends on how often your site changes. Here are general guidelines:'),
      text('Daily backups for sites updated daily, e-commerce stores, membership sites, and news/blog sites with frequent posts. Weekly backups for business sites with occasional updates and portfolio sites. Monthly backups for static sites that rarely change.'),
      text('When in doubt, backup more frequently. Storage is cheap compared to the value of your content.'),
      h2('Best WordPress Backup Plugins'),
      text('Several excellent plugins can automate your WordPress backup process. Here are our top recommendations:'),
      h3('UpdraftPlus'),
      textWithLinks(
        { text: '' },
        { text: 'UpdraftPlus', link: { href: 'https://updraftplus.com/', target: '_blank' } },
        { text: ' is the most popular WordPress backup plugin with over 3 million installations. The free version includes scheduled backups, cloud storage integration, and easy restoration. Premium adds incremental backups and more cloud options.' }
      ),
      h3('BlogVault'),
      textWithLinks(
        { text: '' },
        { text: 'BlogVault', link: { href: 'https://blogvault.net/', target: '_blank' } },
        { text: ' is a premium WordPress backup solution with real-time backups stored on BlogVault\'s servers. Features include one-click staging, easy migrations, and excellent support. Ideal for high-traffic sites.' }
      ),
      h3('BackupBuddy'),
      textWithLinks(
        { text: '' },
        { text: 'BackupBuddy', link: { href: 'https://ithemes.com/backupbuddy/', target: '_blank' } },
        { text: ' is a veteran backup plugin offering complete site backups, cloud storage, and site migration tools. Includes malware scanning in higher tiers. Solid choice for agencies managing multiple sites.' }
      ),
      h2('Where to Store Your WordPress Backups'),
      text('Never store backups only on your web server. If your server fails or gets hacked, you lose your backups too. Always use offsite storage:'),
      textWithLinks(
        { text: 'Cloud storage services like ' },
        { text: 'Google Drive', link: { href: 'https://drive.google.com/', target: '_blank' } },
        { text: ', ' },
        { text: 'Dropbox', link: { href: 'https://www.dropbox.com/', target: '_blank' } },
        { text: ', ' },
        { text: 'Amazon S3', link: { href: 'https://aws.amazon.com/s3/', target: '_blank' } },
        { text: ', or ' },
        { text: 'Backblaze B2', link: { href: 'https://www.backblaze.com/b2/cloud-storage.html', target: '_blank' } },
        { text: '. Your local computer as an additional copy. A separate hosting account or server. Multiple locations for critical sites (the 3-2-1 rule: 3 copies, 2 different media types, 1 offsite).' }
      ),
      h2('How to Restore a WordPress Backup'),
      text('Having backups is pointless if you cannot restore them. Test your WordPress backup restoration process before you need it in an emergency.'),
      text('Most backup plugins include one-click restore functionality. The process typically involves: accessing your backup from storage, uploading it to your site or plugin, running the restoration process, and verifying everything works correctly.'),
      text('If your site is completely down, you may need to restore manually via FTP and phpMyAdmin. This is why testing restoration in a non-emergency is so important.'),
      h2('WordPress Backup Best Practices'),
      text('Follow these best practices to ensure your WordPress backup strategy is solid:'),
      text('Automate your backups so they happen consistently. Store backups in multiple locations. Test restorations periodically. Keep multiple backup versions (do not just overwrite). Backup before major updates or changes. Document your backup and restoration procedures.'),
      h2('Frequently Asked Questions'),
      h3('Does my hosting provider backup my site?'),
      text('Many hosts provide basic backups, but they are often limited and not guaranteed. Always maintain your own independent backup WordPress strategy. Do not rely solely on hosting backups.'),
      h3('How much storage do WordPress backups need?'),
      text('This depends on your site size, especially your uploads folder. A typical site might be 500MB-2GB per backup. Plan for at least 10GB for storing multiple backup versions.'),
      h3('Should I backup the entire wp-content folder?'),
      text('Yes, always backup the complete wp-content folder including uploads, themes, and plugins. This ensures you can fully restore your site exactly as it was.'),
      h3('Can I backup WordPress manually?'),
      text('Yes, you can download files via FTP and export your database via phpMyAdmin. However, manual backups are tedious and easy to forget. Automated backups are much more reliable.'),
      h3('How long should I keep backups?'),
      text('Keep at least 30 days of backups for most sites. For sites with infrequent changes, keeping 90 days or more is wise. Some malware can go undetected for weeks, so older backups may be needed.'),
      h2('Conclusion: Backup WordPress Today'),
      text('Do not wait for disaster to strike before implementing a WordPress backup strategy. Set up automated backups today, store them securely offsite, and test your restoration process.'),
      text('At The WordPress Team, we include automated daily backups with 30-day retention in all our maintenance plans. We store your backups securely in the cloud and can restore your site in minutes if anything goes wrong. Focus on your business—we will protect your website.'),
    ]),
  },
]

async function seedBlogs() {
  console.log('🚀 Seeding blog posts with external links...\n')

  for (const post of blogPosts) {
    try {
      await client.createOrReplace(post)
      console.log(`✅ Created: ${post.title}`)
    } catch (error) {
      console.error(`❌ Error creating ${post.title}:`, error)
    }
  }

  console.log('\n🎉 Done seeding blog posts!')
}

seedBlogs()
