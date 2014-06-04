<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */
 
 

/**
 * Implements hook_process_zone().
 */
function octoban_process_zone(&$vars) {
  $theme = alpha_get_theme();

  if ($vars['elements']['#zone'] == 'title') {
    $vars['breadcrumb'] = $theme->page['breadcrumb'];
    $vars['title_prefix'] = $theme->page['title_prefix'];
    $vars['title'] = $theme->page['title'];
    $vars['title_suffix'] = $theme->page['title_suffix'];
    $vars['title_hidden'] = $theme->page['title_hidden'];
  }
}


function octoban_preprocess_html(&$vars) { 
  $file = 'color-' . theme_get_setting('theme_color') . '-style.css';
  drupal_add_css(path_to_theme() . '/css/'. $file, array('group' => CSS_THEME, 'weight' => 115,'browsers' => array(), 'preprocess' => FALSE));
  $file = theme_get_setting('theme_layout') . '-style.css';
  drupal_add_css(path_to_theme() . '/css/'. $file, array('group' => CSS_THEME, 'weight' => 116,'browsers' => array(), 'preprocess' => FALSE));
 
  drupal_add_library('system', 'ui.accordion');
  drupal_add_library('system', 'ui.tabs');
  drupal_add_library('system', 'ui.progressbar');
}

function octoban_form_simplenews_block_form_alter(&$form) {
  $form['mail']['#title_display'] = 'invisible';
  $form['mail']['#attributes']['placeholder'] = t('Email');
  return $form;
}
