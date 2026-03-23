// add toggle functionality to abstract and bibtex buttons
$(document).ready(function() {
    let copyToastTimeout = null;
    let $bibtexModal = null;

    const ensureBibtexModal = function() {
        if ($bibtexModal && $bibtexModal.length) {
            return $bibtexModal;
        }

        $bibtexModal = $(
            '<div id="bibtex-modal" class="bibtex-modal" aria-hidden="true">' +
                '<div class="bibtex-modal-backdrop"></div>' +
                '<div class="bibtex-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="bibtex-modal-title">' +
                    '<div class="bibtex-modal-header">' +
                        '<h3 id="bibtex-modal-title">BibTeX</h3>' +
                        '<button type="button" class="bibtex-modal-close" aria-label="Close">Close</button>' +
                    '</div>' +
                    '<pre class="bibtex-modal-content"><code></code></pre>' +
                    '<div class="bibtex-modal-actions">' +
                        '<button type="button" class="bibtex-modal-copy">Copy</button>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );

        $("body").append($bibtexModal);

        $bibtexModal.find(".bibtex-modal-backdrop, .bibtex-modal-close").on("click", function() {
            $bibtexModal.removeClass("visible").attr("aria-hidden", "true");
        });

        $bibtexModal.find(".bibtex-modal-copy").on("click", function() {
            const text = $bibtexModal.find(".bibtex-modal-content code").text().trim();
            if (!text) {
                return;
            }
            copyText(text, $(this), "Copied");
        });

        $(document).on("keydown", function(event) {
            if (event.key === "Escape" && $bibtexModal.hasClass("visible")) {
                $bibtexModal.removeClass("visible").attr("aria-hidden", "true");
            }
        });

        return $bibtexModal;
    };

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

    const copyText = function(text, $trigger, copiedText) {
        const setCopiedState = function() {
            if ($trigger && $trigger.length) {
                const originalText = $trigger.data("original-text") || $trigger.text();
                $trigger.data("original-text", originalText);
                $trigger.text(copiedText || "Copied");
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

    const openBibtexModal = function($container) {
        const rawText = $container.find(".bibtex-copy-source").val();
        const text = rawText ? rawText.trim() : "";

        if (!text) {
            return;
        }

        const $modal = ensureBibtexModal();
        $modal.find(".bibtex-modal-content code").text(text);
        $modal.addClass("visible").attr("aria-hidden", "false");
    };

    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        const $container = $(this).parent().parent();
        openBibtexModal($container);
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
