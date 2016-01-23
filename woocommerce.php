<?php
/**
 * The template for displaying woocommerce pages.
 *
 * @link https://docs.woothemes.com/document/third-party-custom-theme-compatibility/
 *
 * @package wp-theme-boilerplate
 */

get_header(); ?>

<div id="primary" class="content-area container">
	<div class="row">
		<div class="col-md-3">
			<?php get_sidebar(); ?>
		</div>
		<main id="main" class="site-main col-md-9" role="main">

			<?php woocommerce_content(); ?>

		</main>
		<!-- #main -->


	</div>
</div><!-- #primary -->


<?php get_footer(); ?>
