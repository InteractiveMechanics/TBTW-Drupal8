<?php

function tbtw_form_system_theme_settings_alter (&$form, \Drupal\Core\Form\FormStateInterface &$form_state, $form_id = NULL) {
    // Work-around for a core bug affecting admin themes. See issue #943212.
    if (isset($form_id)) {
        return;
    }

    $form['press_room_options'] = array(
      '#type'            => 'fieldset',
      '#title'           => t('Press Room Options'),
    );
    $form['press_room_options']['press_contact_1'] = array(
        '#type'          => 'textarea',
        '#title'         => t('Press Contact 1'),
        '#default_value' => theme_get_setting('press_contact_1'),
        '#description'   => t("The press area's primary press contact, as HTML."),
    );
    $form['press_room_options']['press_contact_2'] = array(
        '#type'          => 'textarea',
        '#title'         => t('Press Contact 2'),
        '#default_value' => theme_get_setting('press_contact_2'),
        '#description'   => t("The press area's secondary press contact, as HTML."),
    );
    $form['press_room_options']['press_password'] = array(
        '#type'          => 'textfield',
        '#title'         => t('Press Password Value'),
        '#default_value' => theme_get_setting('press_password'),
        '#description'   => t("Update the password for the press images and videos. Default: prison"),
    );
    

    $form['sitewide_options'] = array(
      '#type'            => 'fieldset',
      '#title'           => t('Sitewide Theme Options'),
    );
    $form['sitewide_options']['tracking_pixel'] = array(
        '#type'          => 'textarea',
        '#title'         => t('Tracking Pixel'),
        '#default_value' => theme_get_setting('tracking_pixel'),
        '#description'   => t("Insert the HTML script code(s) that contain the tracking pixel for the Terror Site. Default: none"),
    );
    $form['sitewide_options']['ticket_purchase_text'] = array(
        '#type'          => 'textfield',
        '#title'         => t('Ticketing Buy Button Text'),
        '#default_value' => theme_get_setting('ticket_purchase_text'),
        '#description'   => t("Update the text for the 'Purchase Tickets' buttons in the menus. Default: Purchase Tickets"),
    );
    $form['sitewide_options']['closed_today'] = array(
      '#type'            => 'checkbox',
      '#title'           => t('Is Terror Behind the Walls closed today?'),
      '#default_value'   => theme_get_setting('closed_today'),
      '#description'     => t("Check this box to indicate that Terror Behind the Walls is closed today. Default: unchecked"),
    );
}