<?php
/**
 * The main template file
 * @subpackage guild
 */
get_header(); ?>
<!-- contents -->
<div class="contents">
<?php
 while ( have_posts() ) : the_post();
  the_content();
 endwhile;
?>
</div><!-- [end] .contents -->
<?php get_footer(); ?>