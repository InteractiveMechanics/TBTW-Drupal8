<?php

function tbtw_form_system_theme_settings_alter (&$form, \Drupal\Core\Form\FormStateInterface &$form_state, $form_id = NULL) {
    // Work-around for a core bug affecting admin themes. See issue #943212.
    if (isset($form_id)) {
        return;
    }

    $form['press_contact_1'] = array(
        '#type'          => 'textarea',
        '#title'         => t('Press Contact 1'),
        '#default_value' => theme_get_setting('press_contact_1'),
        '#description'   => t("The press area's primary press contact"),
    );
    $form['press_contact_2'] = array(
        '#type'          => 'textarea',
        '#title'         => t('Press Contact 2'),
        '#default_value' => theme_get_setting('press_contact_2'),
        '#description'   => t("The press area's secondary press contact"),
    );
    
    $form['press_password'] = array(
        '#type'          => 'textarea',
        '#title'         => t('Press Password Value'),
        '#default_value' => theme_get_setting('press_password'),
        '#description'   => t("Here's the code that contains the password for the press images and videos"),
    );
}