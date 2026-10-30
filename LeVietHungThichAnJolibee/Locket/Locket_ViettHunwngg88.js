// ========= ID ========= //
// Locket: Gold (Filters Disabled)
// @vietthungg88
// ========= Phần cố định ========= //

var bodyText = $response.body;

// 1. NGẮT KỊCH BẢN NẾU GÓI TIN RỖNG (Thêm return)
if (!bodyText) {
    $done({});
    return;
}

var obj;

// 2. BẪY LỖI JSON ĐỘC LẬP
try {
    obj = JSON.parse(bodyText);
} catch (e) {
    console.log("Locket RevenueCat Parse Error: " + e.message);
    $done({});
    return;
}

// 3. THỰC THI LOGIC CHÍNH
try {
    var ua = ($request.headers["User-Agent"] || $request.headers["user-agent"] || "").toLowerCase();
    
    // Chỉ can thiệp nếu đúng là app Locket
    if (ua.includes("locket")) {
        obj.Attention = "Chúc mừng bạn! Vui lòng không sử dụng chúng dưới mục đích thương mại!";

        // Hạ mốc thời gian xuống 2099 để iOS không bị lỗi tràn bộ nhớ (Crash)
        var FAR_FUTURE = "2099-01-01T00:00:00Z";
        var PAST = "2020-01-01T00:00:00Z";

        function makeSub(productId, priceAmount, priceCurrency) {
            return {
                auto_resume_date: null,
                display_name: productId,
                is_sandbox: true,
                ownership_type: "PURCHASED",
                billing_issues_detected_at: null,
                management_url: "https://apps.apple.com/account/subscriptions",
                period_type: "normal",
                price: {
                    amount: priceAmount,
                    currency: priceCurrency
                },
                expires_date: FAR_FUTURE,
                grace_period_expires_date: null,
                refunded_at: null,
                unsubscribe_detected_at: null,
                original_purchase_date: PAST,
                purchase_date: PAST,
                store: "app_store",
                store_transaction_id: "2000001108724193"
            };
        }

        function makeEnt(productId) {
            return {
                grace_period_expires_date: null,
                purchase_date: PAST,
                product_identifier: productId,
                expires_date: FAR_FUTURE
            };
        }

        obj.subscriber = obj.subscriber || {};
        obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
        obj.subscriber.entitlements = obj.subscriber.entitlements || {};

        // ========== 1. MỞ KHOÁ GOLD (Thêm đa dạng mã định danh) ==========
        var goldProduct = "locket_1600_1y";
        obj.subscriber.subscriptions[goldProduct] = makeSub(goldProduct, 399000.0, "VND");
        
        obj.subscriber.entitlements["Gold"] = makeEnt(goldProduct);
        obj.subscriber.entitlements["gold"] = makeEnt(goldProduct);
        obj.subscriber.entitlements["locket_gold"] = makeEnt(goldProduct);

        // ========== 2. TẮT TÍNH NĂNG FILTER (Theo đúng yêu cầu của bạn) ==========
        // var pack10Product = "com.locket.Locket.FilterPack_10Photos_400";
        // obj.subscriber.subscriptions[pack10Product] = makeSub(pack10Product, 0.0, "USD");
        // obj.subscriber.entitlements["effect_pack_10"] = makeEnt(pack10Product);
        
        // var pack20Product = "com.locket.Locket.FilterPack_20Photos_500";
        // obj.subscriber.subscriptions[pack20Product] = makeSub(pack20Product, 0.0, "USD");
        // obj.subscriber.entitlements["effect_pack_20"] = makeEnt(pack20Product);
    }

    $done({ body: JSON.stringify(obj) });
    
} catch (error) {
    console.log("Locket RevenueCat Logic Error: " + error.message);
    $done({});
}
