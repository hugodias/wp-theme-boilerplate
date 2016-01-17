<?php
/**
 * Template part for displaying single posts.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package wp-theme-boilerplate
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('blog-post'); ?>>
	<header class="entry-header blog-post__header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>

		<div class="entry-meta blog-post__header__meta">
			<?php wp_theme_boilerplate_posted_on(); ?>
		</div><!-- .entry-meta -->
	</header><!-- .entry-header -->

	<div class="entry-content blog-post__content">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'wp-theme-boilerplate' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer blog-post__footer">
		<?php wp_theme_boilerplate_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
