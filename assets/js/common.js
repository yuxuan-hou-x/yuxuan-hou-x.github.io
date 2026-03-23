// add toggle functionality to abstract and bibtex buttons
$(document).ready(function() {
    let copyToastTimeout = null;

    const showCopyToast = function(message) {
        let $toast = $("#copy-toast");

        if (!$toast.length) {
            $toast = $('<div id="copy-toast" class="copy-toast" aria-live="polite"></div>');
            $("body").append($toast);
        }

        $toast.text(message).addClass("visible");

        if (copyToastTimeout) {
            window.clearTimeout(copyToastTimeout);
        }

        copyToastTimeout = window.setTimeout(function() {
            $toast.removeClass("visible");
        }, 1800);
    };

    const copyBibtexFromContainer = function($container, $trigger) {
        const text = $container.find(".bibtex-copy-source").val()?.trim();

        if (!text) {
            return;
        }

        const setCopiedState = function() {
            if ($trigger && $trigger.length) {
                const originalText = $trigger.data("original-text") || $trigger.text();
                $trigger.data("original-text", originalText);
                $trigger.text("Copied");
                window.setTimeout(function() {
                    $trigger.text(originalText);
                }, 1500);
            }
            showCopyToast("BibTeX copied to clipboard");
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(setCopiedState);
            return;
        }

        const $temp = $("<textarea>");
        $("body").append($temp);
        $temp.val(text).trigger("select");
        document.execCommand("copy");
        $temp.remove();
        setCopiedState();
    };

    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        const $container = $(this).parent().parent();
        copyBibtexFromContainer($container, $(this));
    });
    $('a').removeClass('waves-effect waves-light');
});

// bootstrap-toc
$(document).ready(function () {
    if($('#toc-sidebar').length){
        var navSelector = "#toc-sidebar";
        var $myNav = $(navSelector);
        Toc.init($myNav);
        $("body").scrollspy({
            target: navSelector,
        });
    }
});
