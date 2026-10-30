var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";

try {
    var bodyText = $response.body;
    if (!bodyText) {
        $done({});
    }
    
    var obj = JSON.parse(bodyText);

    if (ua.includes("Locket")) {
        obj.Attention = "Chúc mừng bạn! Vui lòng không sử dụng chúng dưới mục đích thương mại!";
        obj.entries = obj.entries || {};

        // ============================================================
        // 1. CẤU HÌNH GOLD, FEATURE GATES & PAYWALL
        // ============================================================
        Object.assign(obj.entries, {
            feature_gates: JSON.stringify({
                app_icon_picker: "enabled",
                camera_roll: "enabled",
                camera_theme: "enabled",
                locket_views: "enabled",
                long_captions: "enabled",
                longer_video: "enabled",
                unlimited_friends: "enabled",
                priority_support: "enabled",
                profile_badge: "enabled",
                remove_ads: "enabled",
                video: "enabled",
                custom_widget_frames: "enabled",
                streak_recovery: "enabled"
            }),
            upsell_features: JSON.stringify({
                app_icon_picker: true,
                camera_roll: true,
                camera_theme: true,
                locket_views: true,
                remove_ads: true,
                custom_widget_frames: true
            }),
            paywall_presentation_config: JSON.stringify({
                uid: "paywall_testflight",
                onboarding: false,
                after_sent_moment: false,
                on_foreground: false,
                interval: 2592000,
                profile_banner: true
            }),
            feature_discovery_popup_config: JSON.stringify({
                tag: "LOCKET GOLD PRO MAX",
                tag_gradient: true,
                tag_style: "gold_gradient",
                title: "Design by LeVietHung",
                feature_set: [
                    {
                        title: "Nhớ follow instagram @leviethuwng nhóoo ✨",
                        body: "Up thật nhìuuu ảnh xinh đẹp nhaaa 💛",
                        imageURL: "https://cdn.upanhlaylink.com/i/KwDdo7B9.png"
                    }
                ],
                primary_button_title: "Oke la lá lô!",
                campaign: "locket_gold_welcome_v3",
                start_at: "2020-01-01T00:00:00",
                end_at: "2099-12-31T23:59:59",
                use_local_time_zone: true
            }),
            android_subscribe_gold_button_enabled: "false",
            profile_badge_visible: "true",
            lunar_new_year_app_icon_enabled: "true",
            settings_instagram_url: "https://www.instagram.com",
            settings_tiktok_url: "https://tiktok.com"
        });

        // ============================================================
        // 2. CHẶN QUẢNG CÁO & TẮT TRACKING (SENTRY)
        // ============================================================
        Object.assign(obj.entries, {
            history_ads_mode: "off",
            history_ads_prefetch_count: "0",
            history_ads_prefetch_immediate: "false",
            history_ads_prefetch_reroute: "false",
            history_ads_dynamic_insertion: "false",
            history_ads_refresh_prefetch_on_foreground: "false",
            history_ads_floor_price: "0",
            history_ads_floor_price_att: "0",
            history_ad_log_displayed_on_background: "false",
            history_ads_debug_menu: "false",
            sentry_sample_rate: "0",
            sentry_network_tracing: "false",
            sentry_performance_tracking: "false",
            sentry_trace_sample_rate: "0",
            sentry_profiles_sample_rate: "0"
        });

        // ============================================================
        // 3. CAMERA, VIDEO, FILTERS & UPLOAD QUALITY
        // ============================================================
        Object.assign(obj.entries, {
            camera: JSON.stringify({
                gold_max_duration: 60.0,
                goldMaxDuration: 60.0,
                max_duration: 60.0,
                maxDuration: 60.0,
                ultra_wide: true,
                ultraWide: true,
                volume_button: true,
                volumeButton: true,
                flash_button: true,
                telephoto: true,
                srgb: true,
                lanczos: true,
                quality_mbps: 0.6,
                qualityMbps: 0.6
            }),
            camera_roll: JSON.stringify({
                gold_max_duration: 30.0,
                goldMaxDuration: 30.0,
                video_max_duration: 30.0,
                videoMaxDuration: 30.0,
                max_duration: 30.0,
                maxDuration: 30.0,
                trim_max_duration: 30.0,
                trimMaxDuration: 30.0,
                camera_roll_max_duration: 30.0,
                quality_mbps: 0.6,
                qualityMbps: 0.6,
                flash_button: true
            }),
            live_photos: JSON.stringify({
                capture: true,
                video: true,
                viewing: true,
                catch_up: true,
                widget_looping_mode: "never"
            }),
            camera_roll_preview_enabled: "true",
            camera_roll_video_enabled: "true",
            camera_roll_video_upload_enabled: "true",
            internal_camera_roll_video_upload_enabled: "true",
            longer_camera_roll_videos_enabled: "true",
            video_sound_enabled: "true",
            microphone_enabled: "true",
            camera_microphone_enabled: "true",
            audio_session_deactivation_enabled: "true",
            zoom_enabled: "true",
            upload_main: "false",
            upload_main_image_quality: "0.6",
            upload_main_image_size: "1440",
            upload_thumbnail_image_quality: "0.8",
            upload_thumbnail_image_size: "1020"
        });

        // ============================================================
        // 4. BẠN BÈ, GIỚI HẠN & ĐỀ XUẤT KẾT BẠN
        // ============================================================
        Object.assign(obj.entries, {
            max_friends_count: "999999999",
            friend_limit_mode: "0",
            soft_friend_limit_threshold_count: "999999999",
            show_friend_limit_on_cam: "false",
            signup_max_friends_count: "999999999",
            celebrity_inbox_limit: "999999999",
            celebrity_inbox_enabled: "true",
            celebrity_vip_qr_redemption_enabled: "true",
            friend_limit_geo_override: JSON.stringify({ experiments: {}, area_code_overrides: {} }),
            friends_sheet_locket_count_config: JSON.stringify({ items: [ { threshold: 0, icon_name: "heart" }, { threshold: 1, icon_name: "heart.fill" }, { threshold: 10, emoji: "🤍" }, { threshold: 100, emoji: "💛" }, { threshold: 500, emoji: "❤️‍🔥" }, { threshold: 1000, emoji: "🌟🫶🌟" }, { threshold: 2000, emoji: "✨💟✨" }, { threshold: 5000, emoji: "⚡️😵‍💫⚡" }, { threshold: 10000, emoji: "✨⚡️😱⚡✨" } ]}),
            friend_locket_count_config: JSON.stringify({ items: [ { threshold: 0, icon_name: "heart" }, { threshold: 1, icon_name: "heart.fill" }, { threshold: 10, emoji: "🤍" }, { threshold: 100, emoji: "💛" }, { threshold: 500, emoji: "❤️‍🔥" }, { threshold: 1000, emoji: "✨💗✨" }, { threshold: 2000, emoji: "✨️⭐️✨" }, { threshold: 5000, emoji: "✨💎✨" }, { threshold: 10000, emoji: "✨🔐💛✨" } ]}),
            new_friends_monitoring_enabled: "true",
            improved_friend_suggestions: "true",
            show_friend_suggestions_by_default: "true",
            emoji_friend_suggestions: "true",
            prompt_contact_permissions_on_search: "true",
            populate_phone_numbers_from_suggest_friends: "true",
            hide_friends_enabled: "true",
            hide_invite_links: "false",
            hide_skip_contacts: "true",
            show_all_contacts: "true",
            show_invite_suggestions: "true",
            show_no_friends_bottom_sheet: "false",
            signup_allow_skip_add_friends: "true",
            signup_custom_profile_picture: "true",
            user_data_export_enabled: "true",
            username_suggestions_enabled: "true",
        });

        // ============================================================
        // 5. MOMENTS, STREAK, CHAT & TƯƠNG TÁC
        // ============================================================
        try {
            var streak = JSON.parse(obj.entries.streak_config || "{}");
            streak.minimum_recovery_count = 0;
            streak.minimum_display_count = 0;
            obj.entries.streak_config = JSON.stringify(streak);
        } catch (e) {}

        Object.assign(obj.entries, {
            moment_views_enabled: "true",
            moment_views_v2: "true",
            record_moment_views: "true",
            notify_moment_views: "true",
            get_moment_views_as_cloud_function: "true",
            moment_reactions_v2: "true",
            chat_reactions_enabled: "true",
            conversation_reactions: "true",
            typing_indicators_enabled: "true",
            unsend_message_enabled: "true",
            reply_prototype_enabled: "true",
            messages_integration: "true",
            conversations_enabled: "true",
            fetch_moments_in_conversation: "true",
            hide_chat_button: "false",
            groups_enabled: "true",
            group_contact_invites_enabled: "true",
            groups_onboarding_accept_invite_preview_enabled: "true",
            chat_hyperlink_enabled_mode: "always_enabled",
            send_to_self_only_mode: "always_enabled",
            time_travel_rewind_v2_enabled: "true",
            conversation_drafts_enabled: "true",
            calendar_delete_moment_enabled: "true",
            calendar_rewind_enabled: "false",
            locket_yearbook_story_sharing_encouraged: "true",
            rollcall_enabled: "true",
            rollcall_comment_actions: "true",
            rollcall_profile_button: "true",
            rollcall_prompt_export_after_share: "true",
            rollcall_confirm_skip_tagging: "false",
            rollcall_tap_to_tag_enabled: "false",
        });

        // ============================================================
        // 6. WIDGET, THÔNG BÁO & GIAO DIỆN (JOURNAL / PROFILE)
        // ============================================================
        Object.assign(obj.entries, {
            widget_frame_event_max_images: "5",
            android_widget_frame_event_enabled: "true",
            widget_badge_enabled: "true",
            widget_badge_v2: "true",
            widget_stale_state_enabled: "false",
            widget_last_sent_indicator: "false",
            widget_sync_token_reload_mode: "clearTokenNever",
            widget_frame_event: JSON.stringify({
                uid: "midautumn_2026",
                url: "https://i.ibb.co/JjLZ3cvD/khung-ins.png",
                use_local_time_zone: true,
                placement: "below",
                start_at: "2020-01-01T00:00:00",
                end_at: "2099-12-31T23:59:59"
            }),
            live_activity_onboarding: "true",
            live_activity_onboarding_variant: "friending",
            register_live_activity_push_to_start_token: "true",
            live_activity_remove_stale_start_token: "true",
            notification_preferences_live_activities: "true",
            notification_preferences: "true",
            notification_reply_body_visible: "true",
            prompt_notification_permissions_after_friending: "true",
            activity_bar_enabled: "true",
            journal_activity_bar_enabled: "true",
            journal_settings: JSON.stringify({
                debug_menu_enabled: false,
                focus_animation: false,
                compact_header: true,
                friends_button: false,
                reverse_scroll_direction: false,
                streak_visualization: true,
                streak_visualization_style: "gradient",
                streak_header_minimum_count: 0,
                streak_visualization_minimum_count: 2,
                overlay_indicators: { location: false, music: true, static_content: true, weather: true }
            }),
            qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
            custom_profile_pics: "true",
            profile_menu_v2_enabled: "true"
        });

        // ============================================================
        // 7. HỆ THỐNG, CACHE & STORAGE CDN
        // ============================================================
        Object.assign(obj.entries, {
            cdn_domain_replacements: JSON.stringify({ "firebasestorage.googleapis.com": "cdn.locketcamera.com" }),
            cdn_domain_replacements_video: "true",
            storage_bucket: "gs://locket-img",
            storage_bucket_video: "gs://locket-video",
            image_cache_max_age_sec: "157680000",
            image_cache_max_size: "400000000",
            history_cache_age_days: "1000",
            user_cache_max_age_sec: "691200",
            friends_cache_max_age_sec: "2592000",
            image_fetch_cache: "true",
            image_cache_use_shared: "true",
            use_doc_dir_for_image_cache: "true",
            efficient_history_cache_invalidation: "true",
            timestamp_based_history_fetches: "true",
            get_latest_moment_v2: "true",
            fetch_users_from_cloud_function: "true",
            refresh_interval: "60",
            firestore_refresh_v2: "true",
            firestore_refresh_v3: "true",
            keychain_access_retries: "true",
            blocked_users_cached_sync_enabled: "true",
            beta_features_enabled: "true",
            join_testflight_enabled: "true",
            safety_center: "true",
            help_center: "true",
            support_v2: "true",
            privacy_choices_setting: "true",
            request_att_permission: "true",
            invite_link_preview_variant: "4",
            share_history_config: JSON.stringify({ prompt_enabled: false, fetching_enabled: true }),
            share_history_prompt_enabled: "false",
            use_thumbnails_for_sharing: "true",
            use_thumbnails_in_timeline: "true",
            persist_onboarding_step: "true",
            onboarding_contact_permission_step: "true",
        });

        // ============================================================
        // 8. OVERLAY & CUSTOM CAPTIONS
        // ============================================================
        Object.assign(obj.entries, {
            overlay_navigator_enabled: "true",
            overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
            captions_enabled: "true",
            music_caption_enabled: "true",
            music_caption_song_preview_enabled: "true",
            link_caption_link_enabled: "true",
            overlay_dynamic_captions: JSON.stringify([
                "standard", "poll", "color_palette", "review", "music", "location",
                "weather", "time", "streak", "star_sign", "locket_count",
                "custom", "halloween_2026"
            ]),
            overlay_items: JSON.stringify([
                {
                    section: "General",
                    items: [
                        { overlay_id: "caption:standard", source: "local", caption: { type: "standard" } },
                        { overlay_id: "caption:link", source: "local", caption: { type: "link" } },
                        { overlay_id: "caption:review", source: "local", caption: { type: "review" } },
                        { overlay_id: "caption:poll", source: "local", caption: { type: "poll" } },
                        { overlay_id: "caption:music", source: "local", caption: { type: "music" } },
                        { overlay_id: "caption:location", source: "local", caption: { type: "location" } },
                        { overlay_id: "caption:weather", source: "local", caption: { type: "weather" } },
                        { overlay_id: "caption:time", source: "local", caption: { type: "time" } },
                        { overlay_id: "caption:streak", source: "local", caption: { type: "streak" } },
                        { overlay_id: "caption:star_sign", source: "local", caption: { type: "star_sign" } },
                        { overlay_id: "caption:color_palette", source: "local", caption: { type: "color_palette" } },
                        { overlay_id: "caption:locket_count", source: "local", caption: { type: "locket_count" } },
                    ]
                },
                {
                    section: "Limited for LuuThiHao",
                    items: [
                        { overlay_id: "caption:haoluu10", source: "remote", caption: { background: { colors: ["#FF4D6D", "#f17c9f", "#FFC4D6"] }, icon: { data: "🌷", type: "emoji", color: "#183153" }, max_lines: 1, text: "LuuThiHao", text_color: "#183153", type: "static_content" } },
                        { overlay_id: "caption:uong_bia", source: "remote", caption: { background: { colors: ["#F0C58E", "#F5D9A9", "#EBC6B8"] }, icon: { data: "🍻", type: "emoji" }, max_lines: 1, text: "Bơi hiaaaaa", text_color: "#65462D", type: "static_content" } },
                        { overlay_id: "caption:hoi_chieu_troi_mua", source: "remote", caption: { background: { image: { type: "image", data: "cloud_cover", source: "local" }, colors: ["#546E7A", "#263238"] }, icon: { data: "🌧️", type: "emoji" }, max_lines: 1, text: "Hồi chiều trời mưa...", text_color: "#FFFFFFE6", type: "static_content" } },
                        { overlay_id: "caption:bien_oiiii", source: "remote", caption: { background: { colors: ["#56CFE1", "#72EFDD", "#B8F3FF"] }, icon: { data: "🌊", type: "emoji" }, max_lines: 1, text: "Biển ơiiiii", text_color: "#124559", type: "static_content" } },
                        { overlay_id: "caption:chan_bo_may_di", source: "remote", caption: { background: { colors: ["#6A0572", "#AB1745", "#FF7B54"] }, icon: { data: "🙄", type: "emoji" }, max_lines: 1, text: "Chan bố mày điiiii", text_color: "#FFFFFF", type: "static_content" } },  
                        { overlay_id: "caption:toi_song_the_day", source: "remote", caption: { background: { colors: ["#202124", "#525866", "#AAB2C0"] }, icon: { data: "😇", type: "emoji" }, max_lines: 1, text: "Đời bố bố quản", text_color: "#FFFFFF", type: "static_content" } },
                        { overlay_id: "caption:tuong_love_hoa_ra_lop", source: "remote", caption: { background: { colors: ["#C9184A", "#FF4D6D", "#FFB3C6"] }, icon: { data: "❤️‍🩹", type: "emoji" }, max_lines: 1, text: "Lốp Trưởng", text_color: "#64152F", type: "static_content" } },   
                    ]
                },
                {
                    section: "Festival",
                    items: [
                        { overlay_id: "caption:custom_halloween", source: "remote", caption: { background: { colors: ["#150804", "#C8540D"] }, max_lines: 1, text: "Halloween", text_color: "#FFB182", type: "static_content" } },
                        { overlay_id: "caption:spring", source: "remote", caption: { background: { colors: ["#FFB7C5", "#FF7EB3"] }, icon: { data: "🌸", type: "emoji" }, max_lines: 1, text: "Xin chào Mùa Xuân", text_color: "#FFFFFF", type: "static_content" } },
                        { overlay_id: "caption:summer", source: "remote", caption: { background: { colors: ["#4FACFE", "#00F2FE"] }, icon: { data: "☀️", type: "emoji" }, max_lines: 1, text: "Xin chào Mùa Hạ", text_color: "#FFFFFF", type: "static_content" } },
                        { overlay_id: "caption:custom_autumn", source: "remote", caption: { background: { colors: ["#FFE0A0", "#F6A53A"] }, icon: { data: "🍂", type: "emoji" }, max_lines: 1, text: "Xin chào Mùa Thu", text_color: "#FFFFFF", type: "static_content" } },
                        { overlay_id: "caption:winter", source: "remote", caption: { background: { colors: ["#A1C4FD", "#C2E9FB"] }, icon: { data: "❄️", type: "emoji" }, max_lines: 1, text: "Xin chào Mùa Đông", text_color: "#FFFFFF", type: "static_content" } },
                        { overlay_id: "caption:custom_christmas_eve", source: "remote", caption: { background: { colors: ["#2FA85F", "#176B3A"] }, icon: { data: "🕯️", type: "emoji" }, max_lines: 1, text: "Giáng sinh an lành", text_color: "#FFFFFF", type: "static_content" } },
                        { overlay_id: "caption:custom_christmas_day", source: "remote", caption: { background: { colors: ["#E53935", "#A81818"] }, icon: { data: "🎄", type: "emoji" }, max_lines: 1, text: "Giáng sinh an lành", text_color: "#FFFFFF", type: "static_content" } },
                        { overlay_id: "caption:custom_ny_eve", source: "remote", caption: { background: { colors: ["#FFC64B", "#FFEDBF"] }, icon: { data: "🥂", type: "emoji" }, max_lines: 1, text: "Xin chào 2027!", text_color: "#643F00", type: "static_content" } },
                        { overlay_id: "caption:custom_ny_day", source: "remote", caption: { background: { colors: ["#3B00EC", "#823FFF"] }, icon: { data: "💫", type: "emoji" }, max_lines: 1, text: "Xin chào 2027!", text_color: "#FFFFFF", type: "static_content" } },
                        { overlay_id: "caption:custom_ny_alternate", source: "remote", caption: { background: { colors: ["#FF0062", "#FF783F"] }, max_lines: 1, text: "2027", text_color: "#FFFFFF", type: "static_content" } },
                    ]
                },
            ])
        });
    }

    $done({ body: JSON.stringify(obj) });
} catch (error) {
    console.log("Locket Firebase Script Error: " + error.message);
    $done({});
}
