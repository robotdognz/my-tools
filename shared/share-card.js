/**
 * Unified Share Card Component for Marco's Decision Tools
 * Instagram-optimized: 540x540 canvas (renders at 1080x1080 with scale: 2)
 *
 * Usage in React tools:
 *   <ShareCard
 *     toolName="DECISION BATTLE"
 *     icon="⚔️"
 *     theme="red" // red, orange, cyan, violet, purple, green
 *     mainResult={{ label: "Victory!", value: "Choice A" }}
 *     subResult={{ label: "defeats", value: "Choice B" }}
 *     stats={[{ value: "12", label: "rounds" }, { value: "5", label: "items" }]}
 *     extraContent={<div>...</div>}
 *   />
 */

// Theme color configurations
const SHARE_THEMES = {
  red: {
    gradient: 'linear-gradient(135deg, #1e293b 0%, #450a0a 50%, #1e293b 100%)',
    accent: '#fbbf24',
    headerColor: '#94a3b8',
    mainGradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
  },
  orange: {
    gradient: 'linear-gradient(135deg, #1e293b 0%, #7c2d12 50%, #1e293b 100%)',
    accent: '#fbbf24',
    headerColor: '#94a3b8',
    mainGradient: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
  },
  cyan: {
    gradient: 'linear-gradient(135deg, #0f172a 0%, #164e63 50%, #0f172a 100%)',
    accent: '#22d3ee',
    headerColor: '#94a3b8',
    mainGradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
  },
  violet: {
    gradient: 'linear-gradient(135deg, #0f172a 0%, #4c1d95 50%, #0f172a 100%)',
    accent: '#a78bfa',
    headerColor: '#c4b5fd',
    mainGradient: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
  },
  purple: {
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #1e1b4b 100%)',
    accent: '#e879f9',
    headerColor: '#c4b5fd',
    mainGradient: 'linear-gradient(135deg, #9333ea 0%, #db2777 100%)',
  },
  green: {
    gradient: 'linear-gradient(135deg, #0f172a 0%, #14532d 50%, #0f172a 100%)',
    accent: '#4ade80',
    headerColor: '#94a3b8',
    mainGradient: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
  },
};

// Base styles for share card elements
const shareCardStyles = {
  container: {
    width: 540,
    height: 540,
    padding: 32,
    fontFamily: 'Arial, Helvetica, sans-serif',
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    textAlign: 'center',
    marginBottom: 12,
  },
  headerText: {
    fontSize: 14,
    letterSpacing: 2,
  },
  mainSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 16,
  },
  statsContainer: {
    display: 'flex',
    background: 'rgba(0,0,0,0.4)',
    borderRadius: 12,
    padding: '8px 12px',
  },
  statItem: {
    padding: '4px 16px',
    textAlign: 'center',
  },
  statValue: {
    fontSize: 22,
    lineHeight: '26px',
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 11,
    lineHeight: '14px',
    color: '#94a3b8',
  },
  footer: {
    position: 'absolute',
    bottom: 24,
    left: 32,
    right: 32,
    textAlign: 'center',
    borderTop: '1px solid rgba(255,255,255,0.15)',
    paddingTop: 10,
  },
  footerText: {
    fontSize: 12,
    lineHeight: '16px',
    color: '#64748b',
  },
};

/**
 * Creates a share card React element with unified styling
 * @param {Object} props - Share card configuration
 * @param {string} props.toolName - Name displayed in header (e.g., "DECISION BATTLE")
 * @param {string} props.icon - Emoji icon for the tool
 * @param {string} props.theme - Color theme (red, orange, cyan, violet, purple, green)
 * @param {Object} props.mainResult - Primary result { label, value, sublabel? }
 * @param {Object} props.subResult - Secondary result { label, value }
 * @param {Array} props.stats - Array of { value, label } objects for stats row
 * @param {React.Element} props.extraContent - Optional additional content
 * @param {React.Element} props.customMain - Override the main section entirely
 * @param {Object} props.ref - React ref for html2canvas
 */
function createShareCardElement(props) {
  const {
    toolName,
    icon,
    theme = 'violet',
    mainResult,
    subResult,
    stats = [],
    extraContent,
    customMain,
  } = props;

  const colors = SHARE_THEMES[theme] || SHARE_THEMES.violet;

  return React.createElement('div', {
    style: {
      ...shareCardStyles.container,
      background: colors.gradient,
    }
  }, [
    // Header
    React.createElement('div', { key: 'header', style: shareCardStyles.header },
      React.createElement('div', {
        style: { ...shareCardStyles.headerText, color: colors.headerColor }
      }, toolName)
    ),

    // Main section
    React.createElement('div', { key: 'main', style: shareCardStyles.mainSection },
      customMain || React.createElement(React.Fragment, null, [
        // Icon
        icon && React.createElement('div', {
          key: 'icon',
          style: { textAlign: 'center', fontSize: 48, marginBottom: 12 }
        }, icon),

        // Main result box
        mainResult && React.createElement('div', {
          key: 'mainResult',
          style: {
            background: colors.mainGradient,
            borderRadius: 16,
            padding: '20px 24px',
            textAlign: 'center',
            marginBottom: 16,
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }
        }, [
          mainResult.label && React.createElement('div', {
            key: 'label',
            style: { fontSize: 14, color: 'rgba(255,255,255,0.8)', marginBottom: 6 }
          }, mainResult.label),
          React.createElement('div', {
            key: 'value',
            style: { fontSize: 26, fontWeight: 'bold', color: '#ffffff', lineHeight: '32px' }
          }, mainResult.value),
          mainResult.sublabel && React.createElement('div', {
            key: 'sublabel',
            style: { fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 4 }
          }, mainResult.sublabel),
        ]),

        // Sub result
        subResult && React.createElement('div', {
          key: 'subResult',
          style: { textAlign: 'center', marginBottom: 16 }
        }, [
          React.createElement('span', {
            key: 'label',
            style: { fontSize: 14, color: '#94a3b8' }
          }, subResult.label + ' '),
          React.createElement('span', {
            key: 'value',
            style: { fontSize: 14, color: '#e2e8f0', fontWeight: 'bold' }
          }, subResult.value),
        ]),

        // Stats row
        stats.length > 0 && React.createElement('div', {
          key: 'stats',
          style: shareCardStyles.statsRow
        },
          React.createElement('div', { style: shareCardStyles.statsContainer },
            stats.map((stat, idx) =>
              React.createElement('div', { key: idx, style: shareCardStyles.statItem }, [
                React.createElement('div', {
                  key: 'val',
                  style: { ...shareCardStyles.statValue, color: colors.accent }
                }, stat.value),
                React.createElement('div', {
                  key: 'lbl',
                  style: shareCardStyles.statLabel
                }, stat.label),
              ])
            )
          )
        ),

        // Extra content
        extraContent,
      ])
    ),

    // Footer
    React.createElement('div', { key: 'footer', style: shareCardStyles.footer },
      React.createElement('div', { style: shareCardStyles.footerText }, "Marco's Decision Tools")
    ),
  ]);
}

/**
 * ShareCard React component wrapper
 * Use with forwardRef to get the ref for html2canvas
 */
const ShareCard = React.forwardRef((props, ref) => {
  const element = createShareCardElement(props);

  // Clone with ref
  return React.cloneElement(element, { ref });
});

/**
 * Helper function to generate and share/download the card image
 * @param {HTMLElement} cardElement - The rendered share card DOM element
 * @param {Object} options - Share options
 * @param {string} options.filename - Filename for download
 * @param {string} options.title - Share title
 * @param {string} options.text - Share text
 * @param {Function} options.onStatusChange - Callback for status updates
 */
async function shareCardImage(cardElement, options = {}) {
  const {
    filename = 'result.png',
    title = 'Decision Result',
    text = '',
    onStatusChange = () => {},
  } = options;

  onStatusChange('generating');

  try {
    const canvas = await html2canvas(cardElement, {
      backgroundColor: null,
      scale: 2,
      logging: false,
    });

    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
    const file = new File([blob], filename, { type: 'image/png' });

    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({ files: [file], title, text });
      onStatusChange('shared');
    } else {
      // Download fallback
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
      onStatusChange('downloaded');
    }
  } catch (err) {
    if (err.name !== 'AbortError') {
      // Clipboard fallback
      try {
        await navigator.clipboard.writeText(text + "\nMade with Marco's Decision Tools");
        onStatusChange('copied');
      } catch {
        onStatusChange('error');
      }
    } else {
      onStatusChange(null);
      return;
    }
  }

  setTimeout(() => onStatusChange(null), 2500);
}

// Footer text constant - single source of truth
const SHARE_CARD_FOOTER_TEXT = "Marco's Decision Tools";

// Simple footer component for custom share card implementations
function ShareCardFooter({ style = {} }) {
  return React.createElement('div', {
    style: {
      textAlign: 'center',
      fontSize: 12,
      lineHeight: '16px',
      color: '#64748b',
      ...style,
    }
  }, SHARE_CARD_FOOTER_TEXT);
}

// Export for use in tools
if (typeof window !== 'undefined') {
  window.ShareCard = ShareCard;
  window.ShareCardFooter = ShareCardFooter;
  window.shareCardImage = shareCardImage;
  window.SHARE_THEMES = SHARE_THEMES;
  window.SHARE_CARD_FOOTER_TEXT = SHARE_CARD_FOOTER_TEXT;
  window.createShareCardElement = createShareCardElement;
}
