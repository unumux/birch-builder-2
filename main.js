// #region TEMPLATE REPEAT AREA
const version = "2.0.3"
let importedEmailFile = null // to set the export filename if we imported a file

// used to insert current year in footer templates with dt.getFullYear()
let dt = new Date();

// the idea here is to store all of the email component object within a single mega object...so we can loop through them as needed.
const megaTemplateObj = {
    templateObj_90: {
        templateDesc: '90',
        templateId: 'templateObj_90',
        baseCode: `<!-- c090 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="6px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 6px; font-weight: normal; line-height: 6px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                <center data-parsed="" style="min-width: initial !important; width: 100%;">
                    <a class="birch--linkColor browser-link float-center" href="birch_linkUrl_birch" align="center" style="Margin: 0; color: birch_linkColor_birch; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; line-height: 1; margin: 0; padding: 0; text-align: left; text-decoration: underline;">birch_linkText_birch</a>
                </center>
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="7px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 7px; font-weight: normal; line-height: 7px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c090 -->`,
        category: 'headers',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            linkColor: '#015294',
            linkUrl: 'https://www.unum.com',
            linkText: 'View in browser'
        },
        defaultColonialDataObj:{
            backgroundColor: 'white',
            linkColor: '#19557F',
            linkUrl: 'https://www.coloniallife.com',
            linkText: 'View in browser'
        }
    } // templateObj_90
    ,
    templateObj_100: {
        templateDesc: '100',
        templateId: 'templateObj_100',
        baseCode: `<!-- c100 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-headerbar-wrapper birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 10px; padding-bottom: 15px; padding-top: 15px; text-align: left; vertical-align: top;">
                <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-headerbar-column birch-headerbar-column-logo small-6 large-6 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 16px; padding-right: 8px; text-align: left; width: 284px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 0px; margin: 0; padding: 0; text-align: left;">
                        <a href="birch_logoUrl_birch" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 0; margin: 0; padding: 0; text-align: left; text-decoration: none;"><img class="birch-headerbar-logo birch--logoAltTextColor" src="birch_logoSrc_birch" alt="birch_logoAltText_birch" style="-ms-interpolation-mode: bicubic; border: none; clear: both; color: birch_logoAltTextColor_birch; display: inline !important; max-width: 227px; min-width: 80px; outline: none; padding-bottom: 4px; text-decoration: none; width: auto;"></a>
                    </th></tr></table></th>
                    <th class="birch-headerbar-column birch-headerbar-vertical-align-bottom small-6 large-6 columns last" valign="bottom" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 8px; padding-right: 16px; text-align: left; vertical-align: bottom; width: 284px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <p class="text-right birch-util-no-margin" style="Margin: 0 !important; Margin-bottom: 10px; color: birch_ctaTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 !important; margin-bottom: 10px; padding: 0; text-align: right;">

                            birch_ctaLinkCode_birch
                            
                        </p>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c100 -->`,
        category: 'headers',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#015294',
            logoUrl: 'https://www.unum.com',
            logoSrc: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/unum-logo-white-pad-right.png?raw=true',
            logoAltText: '[Unum]',
            logoAltTextColor: 'white',
            ctaLinkCode: `<a href="birch_ctaUrl_birch" class="birch--ctaTextColor" style="Margin: 0; color: birch_ctaTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;">birch_ctaText_birch</a>`,
            ctaTextColor: 'white',
            ctaUrl: 'https://www.unum.com',
            ctaText: 'call-to-action&nbsp;&rsaquo;'
        },
        defaultColonialDataObj:{
            backgroundColor: '#19557F',
            logoUrl: 'https://www.coloniallife.com',
            logoSrc: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/colonial-logo-white-10r.png?raw=true',
            logoAltText: '[Colonial Life]',
            logoAltTextColor: 'white',
            ctaLinkCode: `<a href="birch_ctaUrl_birch" class="birch--ctaTextColor" style="Margin: 0; color: birch_ctaTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;">birch_ctaText_birch</a>`,
            ctaTextColor: 'white',
            ctaUrl: 'https://www.coloniallife.com',
            ctaText: 'call-to-action&nbsp;&rsaquo;',
            
        }
    } // templateObj_100
    ,
    templateObj_101: {
        templateDesc: '101',
        templateId: 'templateObj_101',
        baseCode: `<!-- c101 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-headerbar-wrapper birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 10px; padding-bottom: 15px; padding-top: 15px; text-align: left; vertical-align: top;">
                <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-headerbar-column birch-headerbar-column-logo small-5 large-2 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 16px; padding-right: 8px; text-align: left; width: 84px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 0px; margin: 0; padding: 0; text-align: left;">
                        <a href="birch_logoUrl_birch" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 0; margin: 0; padding: 0; text-align: left; text-decoration: none;"><img class="birch-headerbar-logo birch--logoAltTextColor" src="birch_logoSrc_birch" alt="birch_logoAltText_birch" style="-ms-interpolation-mode: bicubic; border: none; clear: both; color: birch_logoAltTextColor_birch; display: inline !important; max-width: 227px; min-width: 80px; outline: none; padding-bottom: 4px; text-decoration: none; width: auto;"></a>
                    </th></tr></table></th>
                    <th class="birch-headerbar-column birch-headerbarColor-on-left birch-headerbar-vertical-align-bottom small-7 large-10 columns last" valign="bottom" style="Margin: 0 auto; border-left: 1px birch_headerbarColor_birch solid; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 8px; padding-right: 16px; text-align: left; vertical-align: bottom; width: 484px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <span class="birch-headerbar-desc-line-height birch--descTextColor" style="color: birch_descTextColor_birch;">birch_descText_birch</span>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c101 -->`,
        category: 'headers',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#015294',
            logoUrl: 'https://www.unum.com',
            logoSrc: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/unum-logo-white-pad-right.png?raw=true',
            logoAltText: '[Unum]',
            logoAltTextColor: 'white',
            headerbarColor: 'white',
            descText: 'Description text that is much longer than the other ones.',
            descTextColor: 'white'
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#19557F',
            logoUrl: 'https://www.coloniallife.com',
            logoSrc: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/colonial-logo-white-10r.png?raw=true',
            logoAltText: '[Colonial Life]',
            logoAltTextColor: 'white',
            headerbarColor: 'white',
            descText: 'Description text that is much longer than the other ones.',
            descTextColor: 'white'
        }
    } // templateObj_101
    ,
    templateObj_102: {
        templateDesc: '102',
        templateId: 'templateObj_102',
        baseCode: `<!-- c102 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-headerbar-wrapper birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 10px; padding-bottom: 15px; padding-top: 15px; text-align: left; vertical-align: top;">
                <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-headerbar-column birch-headerbar-column-logo small-5 large-2 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 16px; padding-right: 8px; text-align: left; width: 84px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 0px; margin: 0; padding: 0; text-align: left;">
                        <a href="birch_logoUrl_birch" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 0; margin: 0; padding: 0; text-align: left; text-decoration: none;"><img class="birch-headerbar-logo birch--logoAltTextColor" src="birch_logoSrc_birch" alt="birch_logoAltText_birch" style="-ms-interpolation-mode: bicubic; border: none; clear: both; color: birch_logoAltTextColor_birch; display: inline !important; max-width: 227px; min-width: 80px; outline: none; padding-bottom: 4px; text-decoration: none; width: auto;"></a>
                    </th></tr></table></th>
                    <th class="birch-headerbar-column birch-headerbarColor-on-left birch-headerbar-vertical-align-bottom small-7 large-6 columns" valign="bottom" style="Margin: 0 auto; border-left: 1px birch_headerbarColor_birch solid; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 8px; padding-right: 8px; text-align: left; vertical-align: bottom; width: 284px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <span class="birch--descTextColor" style="color: birch_descTextColor_birch;">birch_descText_birch</span>
                    </th></tr></table></th>
                    <th class="show-for-large birch-headerbar-column birch-headerbar-vertical-align-bottom small-12 large-4 columns last" valign="bottom" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 8px; padding-right: 16px; text-align: left; vertical-align: bottom; width: 184px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <p class="text-right show-for-large birch-util-no-margin" style="Margin: 0 !important; Margin-bottom: 10px; color: birch_ctaTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 !important; margin-bottom: 10px; padding: 0; text-align: right;">

                            birch_ctaLinkCode_birch
                            
                        </p>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c102 -->`,
        category: 'headers',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#015294',
            logoUrl: 'https://www.unum.com',
            logoSrc: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/unum-logo-white-pad-right.png?raw=true',
            logoAltText: '[Unum]',
            logoAltTextColor: 'white',
            headerbarColor: 'white',
            descText: 'Description',
            descTextColor: 'white',
            ctaLinkCode: `<a href="birch_ctaUrl_birch" class="birch--ctaTextColor" style="Margin: 0; color: birch_ctaTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;">birch_ctaText_birch</a>`,
            ctaTextColor: 'white',
            ctaUrl: 'https://www.unum.com',
            ctaText: 'call-to-action&nbsp;&rsaquo;'
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#19557F',
            logoUrl: 'https://www.coloniallife.com',
            logoSrc: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/colonial-logo-white-10r.png?raw=true',
            logoAltText: '[Colonial Life]',
            logoAltTextColor: 'white',
            headerbarColor: 'white',
            descText: 'Description',
            descTextColor: 'white',
            ctaLinkCode: `<a href="birch_ctaUrl_birch" class="birch--ctaTextColor" style="Margin: 0; color: birch_ctaTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;">birch_ctaText_birch</a>`,
            ctaTextColor: 'white',
            ctaUrl: 'https://www.coloniallife.com',
            ctaText: 'call-to-action&nbsp;&rsaquo;'
        }
    } // templateObj_102
    ,
    templateObj_103: {
        templateDesc: '103',
        templateId: 'templateObj_103',
        baseCode: `<!-- c103 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-headerbar-wrapper birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 10px; padding-bottom: 15px; padding-top: 15px; text-align: left; vertical-align: top;">
                <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-headerbar-column birch-headerbar-column-logo small-5 large-2 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 16px; padding-right: 8px; text-align: left; width: 84px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 0px; margin: 0; padding: 0; text-align: left;">
                        <a href="birch_logoUrl_birch" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 0; margin: 0; padding: 0; text-align: left; text-decoration: none;"><img class="birch-headerbar-logo birch--logoAltTextColor" src="birch_logoSrc_birch" alt="birch_logoAltText_birch" style="-ms-interpolation-mode: bicubic; border: none; clear: both; color: birch_logoAltTextColor_birch; display: inline !important; max-width: 227px; min-width: 80px; outline: none; padding-bottom: 4px; text-decoration: none; width: auto;"></a>
                    </th></tr></table></th>
                    <th class="birch-headerbar-column birch-headerbarColor-on-left birch-headerbar-vertical-align-bottom small-7 large-6 columns" valign="bottom" style="Margin: 0 auto; border-left: 1px birch_headerbarColor_birch solid; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 8px; padding-right: 8px; text-align: left; vertical-align: bottom; width: 284px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <span class="birch--descTextColor" style="color: birch_descTextColor_birch;">birch_descText_birch</span>
                    </th></tr></table></th>
                    <th class="show-for-large birch-headerbar-column birch-headerbar-vertical-align-bottom small-12 large-4 columns last" valign="bottom" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 8px; padding-right: 16px; text-align: left; vertical-align: bottom; width: 184px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <p class="text-right birch--dateTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_dateTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1; margin: 0; margin-bottom: 0; padding: 0; text-align: right;">birch_dateText_birch</p>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c103 -->`,
        category: 'headers',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#015294',
            logoUrl: 'https://www.unum.com',
            logoSrc: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/unum-logo-white-pad-right.png?raw=true',
            logoAltText: '[Unum]',
            logoAltTextColor: 'white',
            headerbarColor: 'white',
            descText: 'Description',
            descTextColor: 'white',
            dateTextColor: 'white',
            dateText: 'September 25, 2018'
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#19557F',
            logoUrl: 'https://www.coloniallife.com',
            logoSrc: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/colonial-logo-white-10r.png?raw=true',
            logoAltText: '[Colonial Life]',
            logoAltTextColor: 'white',
            headerbarColor: 'white',
            descText: 'Description',
            descTextColor: 'white',
            textColor: 'white',
            dateTextColor: 'white',
            dateText: 'September 25, 2018'
        }
    } // templateObj_103
    ,
    templateObj_104: {
        templateDesc: '104',
        templateId: 'templateObj_104',
        baseCode: `<!-- c104 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-headerbar-wrapper birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 10px; padding-bottom: 15px; padding-top: 15px; text-align: left; vertical-align: top;">
                <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-headerbar-column birch-headerbar-column-logo small-6 large-6 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 16px; padding-right: 8px; text-align: left; width: 284px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 0px; margin: 0; padding: 0; text-align: left;">
                        <a href="birch_logoUrl_birch" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 0; margin: 0; padding: 0; text-align: left; text-decoration: none;"><img class="birch-headerbar-logo birch--logoAltTextColor" src="birch_logoSrc_birch" alt="birch_logoAltText_birch" style="-ms-interpolation-mode: bicubic; border: none; clear: both; color: birch_logoAltTextColor_birch; display: inline !important; max-width: 227px; min-width: 80px; outline: none; padding-bottom: 4px; text-decoration: none; width: auto;"></a>
                    </th></tr></table></th>
                    <th class="show-for-large birch-headerbar-column birch-headerbar-vertical-align-bottom small-6 large-6 columns last" valign="bottom" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 8px; padding-right: 16px; text-align: left; vertical-align: bottom; width: 284px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <p class="text-right birch-util-no-margin" style="Margin: 0 !important; Margin-bottom: 10px; color: birch_ctaTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 !important; margin-bottom: 10px; padding: 0; text-align: right;">

                            birch_ctaLinkCode_birch
                            
                        </p>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c104 -->`,
        category: 'headers',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#19557F',
            logoUrl: 'https://www.colonial-paulrevere.com',
            logoSrc: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/paul-revere-logo-white-10r.png?raw=true',
            logoAltText: '[Colonial Voluntary Benefits]',
            logoAltTextColor: 'white',
            ctaLinkCode: `<a href="birch_ctaUrl_birch" class="birch--ctaTextColor" style="Margin: 0; color: birch_ctaTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;">birch_ctaText_birch</a>`,
            ctaTextColor: 'white',
            ctaUrl: 'https://www.colonial-paulrevere.com',
            ctaText: 'call-to-action&nbsp;&rsaquo;'
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#19557F',
            logoUrl: 'https://www.colonial-paulrevere.com',
            logoSrc: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/paul-revere-logo-white-10r.png?raw=true',
            logoAltText: '[Colonial Voluntary Benefits]',
            logoAltTextColor: 'white',
            ctaLinkCode: `<a href="birch_ctaUrl_birch" class="birch--ctaTextColor" style="Margin: 0; color: birch_ctaTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;">birch_ctaText_birch</a>`,
            ctaTextColor: 'white',
            ctaUrl: 'https://www.colonial-paulrevere.com',
            ctaText: 'call-to-action&nbsp;&rsaquo;'
        }
    } // templateObj_104
    ,
    templateObj_150: {
        templateDesc: '150',
        templateId: 'templateObj_150',
        baseCode: `<!-- c150 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor birch-wrapper-align-vertical-middle birch--wrapper200" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="height: 200px; mso-height-rule: 200px; padding: 0; text-align: left; vertical-align: middle;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: middle;">
                <!-- need to manually set [vertical-align: middle; height: 200px; mso-height-rule: 200px;] to the 1st TR in the wrapper table -->
                <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="small-12 large-12 columns first last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 16px; padding-right: 16px; text-align: left; width: 584px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <h1 class="text-center birch-text-styles-h1 birch--h1TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 21px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 0 !important; padding: 0; text-align: center; word-wrap: normal;">birch_h1Text_birch</h1>
                    </th>
        <th class="expander" style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0 !important; text-align: left; visibility: hidden; width: 0;"></th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c150 -->`,
        category: 'banners',
        tags: ['1col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#015294',
            h1TextColor: 'white',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.'
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#19557F',
            h1TextColor: 'white',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.'
        }
    } // templateObj_150
    ,
    templateObj_150b: {
        templateDesc: '150b',
        templateId: 'templateObj_150b',
        baseCode: `<!-- c150b -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor birch-wrapper-align-vertical-middle birch--wrapper200" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="height: 200px; mso-height-rule: 200px; padding: 0; text-align: left; vertical-align: middle;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: middle;">
                <!-- used to need to manually set [vertical-align: middle; height: 200px; mso-height-rule: 200px;] to the 1st TR in the wrapper table -->
                <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="small-12 large-12 columns first last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 16px; padding-right: 16px; text-align: left; width: 584px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <h1 class="birch-text-styles-h1 birch--h1TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 21px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 0 !important; padding: 0; text-align: left; word-wrap: normal;">birch_h1Text_birch</h1>
                    </th>
        <th class="expander" style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0 !important; text-align: left; visibility: hidden; width: 0;"></th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c150b -->`,
        category: 'banners',
        tags: ['1col', 'alignedLeft'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#015294',
            h1TextColor: 'white',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.'
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#19557F',
            h1TextColor: 'white',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.'
        }
    } // templateObj_150b
    ,
    templateObj_151: {
        templateDesc: '151',
        templateId: 'templateObj_151',
        baseCode: `<!-- c151 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor birch-wrapper-align-vertical-middle birch--wrapper200" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="height: 200px; mso-height-rule: 200px; padding: 0; text-align: left; vertical-align: middle;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: middle;">
                <!-- need to manually set [vertical-align: middle; height: 200px; mso-height-rule: 200px;] to the 1st TR in the wrapper table -->
                <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="small-12 large-12 columns first last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 16px; padding-right: 16px; text-align: left; width: 584px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <h1 class="text-center birch-text-styles-h1 birch--h1TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 21px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h1Text_birch</h1>

                        birch_ctaCode_birch
                        
                    </th>
        <th class="expander" style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0 !important; text-align: left; visibility: hidden; width: 0;"></th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c151 -->`,
        category: 'banners',
        tags: ['1col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#015294',
            h1TextColor: 'white',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            ctaBackgroundColor: 'white',
            ctaUrl: 'https://www.unum.com',
            ctaTextColor: '#015294',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#19557F',
            h1TextColor: 'white',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            ctaBackgroundColor: 'white',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: '#19557F',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`

        }
    } // templateObj_151
    ,
    templateObj_152: {
        templateDesc: '152',
        templateId: 'templateObj_152',
        baseCode: `<!-- c152 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor birch-wrapper-align-vertical-middle birch--wrapper200" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="height: 200px; mso-height-rule: 200px; padding: 0; text-align: left; vertical-align: middle;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: middle;">
                <!-- need to manually set [vertical-align: middle; height: 200px; mso-height-rule: 200px;] to the 1st TR in the wrapper table -->
                <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="small-12 large-12 columns first last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 16px; padding-right: 16px; text-align: left; width: 584px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <h1 class="text-center birch-text-styles-h1 birch--h1TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 21px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h1Text_birch</h1>
                        <p class="text-center birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center;">birch_pText_birch</p>
                    </th>
        <th class="expander" style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0 !important; text-align: left; visibility: hidden; width: 0;"></th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c152 -->`,
        category: 'banners',
        tags: ['1col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#015294',
            h1TextColor: 'white',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pText: 'Mauris non tempor quam, et lacinia sapien.',
            pTextColor: 'white'
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#19557F',
            h1TextColor: 'white',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pText: 'Mauris non tempor quam, et lacinia sapien.',
            pTextColor: 'white'
        }
    } // templateObj_152
    ,
    templateObj_153: {
        templateDesc: '153',
        templateId: 'templateObj_153',
        baseCode: `<!-- c153 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor birch-wrapper-align-vertical-middle birch--wrapper200" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="height: 200px; mso-height-rule: 200px; padding: 0; text-align: left; vertical-align: middle;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: middle;">
                <!-- need to manually set [vertical-align: middle; height: 200px; mso-height-rule: 200px;] to the 1st TR in the wrapper table -->
                <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="small-12 large-12 columns first last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 16px; padding-right: 16px; text-align: left; width: 584px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <h1 class="text-center birch-text-styles-h1 birch--h1TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 21px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h1Text_birch</h1>
                        <p class="text-center birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center;">birch_pText_birch</p>

                        birch_ctaCode_birch
                        
                    </th>
        <th class="expander" style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0 !important; text-align: left; visibility: hidden; width: 0;"></th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c153 -->`,
        category: 'banners',
        tags: ['1col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#015294',
            h1TextColor: 'white',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pText: 'Mauris non tempor quam, et lacinia sapien.',
            pTextColor: 'white',
            ctaBackgroundColor: 'white',
            ctaUrl: 'https://www.unum.com',
            ctaTextColor: '#015294',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#19557F',
            h1TextColor: 'white',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pText: 'Mauris non tempor quam, et lacinia sapien.',
            pTextColor: 'white',
            ctaBackgroundColor: 'white',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: '#19557F',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`,
        }
    } // templateObj_153
    ,
    templateObj_154: {
        templateDesc: '154',
        templateId: 'templateObj_154',
        baseCode: `<!-- c154 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor birch-wrapper-align-vertical-middle birch--wrapper200" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="height: 200px; mso-height-rule: 200px; padding: 0; text-align: left; vertical-align: middle;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: middle;">
                <!-- need to manually set [vertical-align: middle; height: 200px; mso-height-rule: 200px;] to the 1st TR in the wrapper table -->
                <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="small-12 large-12 columns first last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 16px; padding-right: 16px; text-align: left; width: 584px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <center data-parsed="" style="min-width: initial !important; width: 100%;">
                            <img class="birch--iconAltTextColor float-center" width="50" height="50" src="birch_iconUrl_birch" alt="birch_iconAltText_birch" align="center" style="-ms-interpolation-mode: bicubic; Margin: 0 auto; clear: both; color: birch_iconAltTextColor_birch; display: block; float: none; margin: 0 auto; max-width: 100%; outline: none; text-align: center; text-decoration: none; width: auto;">
                        </center>
                        <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="16px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                        <h1 class="text-center birch-text-styles-h1 birch--h1TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 21px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h1Text_birch</h1>
                    </th>
        <th class="expander" style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0 !important; text-align: left; visibility: hidden; width: 0;"></th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c154 -->`,
        category: 'banners',
        tags: ['1col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#015294',
            h1TextColor: 'white',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            iconUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-50.jpg?raw=true',
            iconAltText: '',
            iconAltTextColor: 'white'
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#19557F',
            h1TextColor: 'white',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            iconUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-50.jpg?raw=true',
            iconAltText: '',
            iconAltTextColor: 'white'
        }
    } // templateObj_154
    ,
    templateObj_155: {
        templateDesc: '155',
        templateId: 'templateObj_155',
        baseCode: `<!-- c155 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-util-background-color-unum-blue" align="center" style="background-color: #015294; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <img class="birch--imgAltTextColor" width="600" height="200" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; outline: none; text-decoration: none; width: auto;">
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c155 -->`,
        category: 'banners',
        tags: ['1col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-600.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E'
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-600.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E'
        }
    } // templateObj_155
    ,
    templateObj_156: {
        templateDesc: '156',
        templateId: 'templateObj_156',
        baseCode: `<!-- c156 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-grid-img-only-column birch-wrapper-padding-2column-banner-column1 small-12 large-6 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <img class="birch-wrapper-padding-2column-banner-image birch-min-width-300 birch--imgAltTextColor" width="300" height="200" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 300px; outline: none; text-decoration: none; width: auto;">
                    </th></tr></table></th>
        
                    <th class="small-12 large-6 columns last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <table class="wrapper birch-wrapper-padding-2column-banner-column2 birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 27px; padding-right: 27px; text-align: left; vertical-align: top;">
                            <h1 class="text-center birch-text-styles-h1 birch--h1TextColor birch-util-mobile-padding-top-50 birch-util-mobile-padding-bottom-50" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 21px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 0 !important; padding: 0; text-align: center; word-wrap: normal;">birch_h1Text_birch</h1>
                        </td></tr></table>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c156 -->`,
        category: 'banners',
        tags: ['2col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7', //015294
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-300x200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            backgroundColor2: '#f7f7f7', //015294
            h1TextColor: '#015294', //white
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.'
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7', //145481
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-300x200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            backgroundColor2: '#f7f7f7', //145481
            h1TextColor: '#145481', //white
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.'
        }
    } // templateObj_156
    ,
    templateObj_157: {
        templateDesc: '157',
        templateId: 'templateObj_157',
        baseCode: `<!-- c157 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-grid-img-only-column birch-wrapper-padding-2column-banner-column1 small-12 large-6 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <img class="birch-wrapper-padding-2column-banner-image birch-min-width-300 birch--imgAltTextColor" width="300" height="200" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 300px; outline: none; text-decoration: none; width: auto;">
                    </th></tr></table></th>
        
                    <th class="small-12 large-6 columns last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <table class="wrapper birch-wrapper-padding-2column-banner-column2 birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 27px; padding-right: 27px; text-align: left; vertical-align: top;">
                            <h1 class="text-center birch-text-styles-h1 birch--h1TextColor birch-util-mobile-padding-top-50" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 21px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 0 !important; padding: 0; text-align: center; word-wrap: normal;">birch_h1Text_birch</h1>
                            <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="10px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-weight: normal; line-height: 10px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 

                            birch_ctaCode_birch


                        </td></tr></table>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c157 -->`,
        category: 'banners',
        tags: ['2col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7', //015294
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-300x200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            backgroundColor2: '#f7f7f7', //015294
            h1TextColor: '#015294', //white
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            ctaBackgroundColor: '#015294', //white
            ctaUrl: 'https://www.unum.com',
            ctaTextColor: 'white', //015294
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center class="birch-util-mobile-padding-bottom-50" data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7', //145481
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-300x200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            backgroundColor2: '#f7f7f7', //145481
            h1TextColor: '#145481', //white
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            ctaBackgroundColor: '#145481', //white
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white', //19557F
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center class="birch-util-mobile-padding-bottom-50" data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`
        }
    } // templateObj_157
    ,
    templateObj_157b: {
        templateDesc: '157b',
        templateId: 'templateObj_157b',
        baseCode: `<!-- c157b -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-grid-img-only-column birch-wrapper-padding-2column-banner-column1 small-12 large-6 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <img class="birch-wrapper-padding-2column-banner-image birch-min-width-300 birch--imgAltTextColor" width="300" height="200" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 300px; outline: none; text-decoration: none; width: auto;">
                    </th></tr></table></th>
        
                    <th class="small-12 large-6 columns last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;"><!-- this prevents padding under the image on the left -->
                        <table class="wrapper birch-wrapper-padding-2column-banner-column2 birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 27px; padding-right: 27px; text-align: left; vertical-align: top;">
                            <h1 class="birch-text-styles-h1 birch--h1TextColor birch-util-mobile-padding-top-50" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 21px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 0 !important; padding: 0; text-align: left; word-wrap: normal;">birch_h1Text_birch</h1>

                            <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="10px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-weight: normal; line-height: 10px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                            <div class="birch-util-mobile-padding-bottom-50">

                                birch_ctaCode_birch
                                
                            </div>
                        </td></tr></table>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c157b -->`,
        category: 'banners',
        tags: ['2col', 'alignedLeft'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7', //015294
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-300x200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            backgroundColor2: '#f7f7f7', //015294
            h1TextColor: '#015294', //white
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            ctaBackgroundColor: '#015294', //white
            ctaUrl: 'https://www.unum.com',
            ctaTextColor: 'white', //015294
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<table class="button small-expanded radius birch--ctaButton" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>`
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7', //145481
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-300x200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            backgroundColor2: '#145481', //145481
            h1TextColor: '#145481', //white
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            ctaBackgroundColor: '#145481', //white
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white', //19557F
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<table class="button small-expanded radius birch--ctaButton" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>`
        }
    } // templateObj_157b
    ,
    templateObj_158: {
        templateDesc: '158',
        templateId: 'templateObj_158',
        baseCode: `<!-- c158 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-grid-img-only-column birch-wrapper-padding-2column-banner-column1 small-12 large-6 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <img class="birch-wrapper-padding-2column-banner-image birch-min-width-300 birch--imgAltTextColor" width="300" height="200" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 300px; outline: none; text-decoration: none; width: auto;">
                    </th></tr></table></th>
        
                    <th class="small-12 large-6 columns last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <table class="wrapper birch-wrapper-padding-2column-banner-column2 birch-util-mobile-padding-bottom-50 birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 27px; padding-right: 27px; text-align: left; vertical-align: top;">
                            <center class="birch-util-mobile-padding-top-50" data-parsed="" style="min-width: initial !important; width: 100%;">
                                <img class="birch--iconAltTextColor float-center" width="50" height="50" src="birch_iconUrl_birch" alt="birch_iconAltText_birch" align="center" style="-ms-interpolation-mode: bicubic; Margin: 0 auto; clear: both; color: birch_iconAltTextColor_birch; display: block; float: none; margin: 0 auto; max-width: 100%; outline: none; text-align: center; text-decoration: none; width: auto;">
                            </center>
                            <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="16px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                            <h1 class="text-center birch-text-styles-h1 birch--h1TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 21px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 0 !important; padding: 0; text-align: center; word-wrap: normal;">birch_h1Text_birch</h1>
                        </td></tr></table>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c158 -->`,
        category: 'banners',
        tags: ['2col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7', //015294
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-300x200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            iconUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-50.jpg?raw=true',
            iconAltText: '',
            iconAltTextColor: '#015294', //white
            backgroundColor2: '#f7f7f7', //015294
            h1TextColor: '#015294', //white
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.'
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7', //145481
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-300x200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            iconUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-50.jpg?raw=true',
            iconAltText: '',
            iconAltTextColor: '#145481', //white
            backgroundColor2: '#f7f7f7', //145481
            h1TextColor: '#145481', //white
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.'
        }
    } // templateObj_158
    ,
    templateObj_160: {
        templateDesc: '160',
        templateId: 'templateObj_160',
        baseCode: `<!-- c160 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-grid-img-only-column birch-wrapper-padding-2column-banner-column1 small-12 large-6 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <img class="birch-wrapper-padding-2column-banner-image birch-min-width-300 birch--imgAltTextColor" width="300" height="193" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 300px; outline: none; text-decoration: none; width: auto;">
                    </th></tr></table></th>
        
                    <th class="small-12 large-6 columns last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <table class="wrapper birch-wrapper-padding-2column-banner-column2 birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 27px; padding-right: 27px; text-align: left; vertical-align: top;">
                            <h1 class="text-center birch-text-styles-h1 birch--h1TextColor birch-util-mobile-padding-top-50 birch-util-mobile-padding-bottom-50" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 21px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 0 !important; padding: 0; text-align: center; word-wrap: normal;">birch_h1Text_birch</h1>
                        </td></tr></table>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
            <table class="wrapper birch-util-background-color-colonial-steel-blue" align="center" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="spacer birch-util-background-color-colonial-steel-blue birch--spacer600wide" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="7px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 7px; font-weight: normal; line-height: 7px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top; width: 600px;">&#xA0;</td></tr></tbody></table> 
                    <!-- manually set width of TD holding &#xA0 to 600px -->
                
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c160 -->`,
        category: 'banners',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-193x300.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            backgroundColor2: '#f7f7f7',
            h1TextColor: '#145481',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.'
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-193x300.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            backgroundColor2: '#f7f7f7',
            h1TextColor: '#145481',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.'
        }
    } // templateObj_160
    ,
    templateObj_161: {
        templateDesc: '161',
        templateId: 'templateObj_161',
        baseCode: `<!-- c161 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-grid-img-only-column birch-wrapper-padding-2column-banner-column1 small-12 large-6 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <img class="birch-wrapper-padding-2column-banner-image birch-min-width-300 birch--imgAltTextColor" width="300" height="193" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 300px; outline: none; text-decoration: none; width: auto;">
                    </th></tr></table></th>
        
                    <th class="small-12 large-6 columns last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <table class="wrapper birch-wrapper-padding-2column-banner-column2 birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 27px; padding-right: 27px; text-align: left; vertical-align: top;">
                            <h1 class="text-center birch-text-styles-h1 birch--h1TextColor birch-util-mobile-padding-top-50 birch-util-mobile-padding-bottom-50" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 21px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 0 !important; padding: 0; text-align: center; word-wrap: normal;">birch_h1Text_birch</h1>

                            <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="10px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-weight: normal; line-height: 10px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 

                            birch_ctaCode_birch

                        </td></tr></table>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
            <table class="wrapper birch-util-background-color-colonial-steel-blue" align="center" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="spacer birch-util-background-color-colonial-steel-blue birch--spacer600wide" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="7px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 7px; font-weight: normal; line-height: 7px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top; width: 600px;">&#xA0;</td></tr></tbody></table> 
                    <!-- manually set width of TD holding &#xA0 to 600px -->
                
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c161 -->`,
        category: 'banners',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-193x300.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            backgroundColor2: '#f7f7f7',
            h1TextColor: '#145481',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            ctaBackgroundColor: '#19557F',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center class="birch-util-mobile-padding-bottom-50" data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-193x300.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            backgroundColor2: '#f7f7f7',
            h1TextColor: '#145481',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            ctaBackgroundColor: '#19557F',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center class="birch-util-mobile-padding-bottom-50" data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`
        }
    } // templateObj_161
    ,
    templateObj_161b: {
        templateDesc: '161b',
        templateId: 'templateObj_161b',
        baseCode: `<!-- 161b -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-grid-img-only-column birch-wrapper-padding-2column-banner-column1 small-12 large-6 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <img class="birch-wrapper-padding-2column-banner-image birch-min-width-300 birch--imgAltTextColor" width="300" height="193" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 300px; outline: none; text-decoration: none; width: auto;">
                    </th></tr></table></th>
        
                    <th class="small-12 large-6 columns last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <table class="wrapper birch-wrapper-padding-2column-banner-column2 birch--backgroundColor birch-wrapper-align-vertical-middle birch--wrapper193" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="height: 193px; mso-height-rule: 193px; padding: 0; text-align: left; vertical-align: middle;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 27px; padding-right: 27px; text-align: left; vertical-align: middle;">
                            <!-- need to manually set [vertical-align: middle; height: 200px; mso-height-rule: 200px;] to the 1st TR in the wrapper table -->
                            <h1 class="birch-text-styles-h1 birch--h1TextColor birch-util-mobile-padding-top-50 birch-util-mobile-padding-bottom-50" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 21px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 0 !important; padding: 0; text-align: left; word-wrap: normal;">birch_h1Text_birch</h1>

                            <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="10px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-weight: normal; line-height: 10px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 

                            birch_ctaCode_birch
                            
                        </td></tr></table>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
            <table class="wrapper birch-util-background-color-colonial-steel-blue" align="center" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="spacer birch-util-background-color-colonial-steel-blue birch--spacer600wide" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="7px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 7px; font-weight: normal; line-height: 7px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top; width: 600px;">&#xA0;</td></tr></tbody></table> 
                    <!-- manually set width of TD holding &#xA0 to 600px -->
                
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /161b -->`,
        category: 'banners',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-193x300.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            backgroundColor2: '#f7f7f7',
            h1TextColor: '#145481',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            ctaBackgroundColor: '#19557F',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<div class="birch-util-mobile-padding-bottom-50">
            <table class="button small-expanded radius birch--ctaButton" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </div>`
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-193x300.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            backgroundColor2: '#f7f7f7',
            h1TextColor: '#145481',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            ctaBackgroundColor: '#19557F',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<div class="birch-util-mobile-padding-bottom-50">
            <table class="button small-expanded radius birch--ctaButton" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </div>`
        }
    } // templateObj_161b
    ,
    templateObj_162: {
        templateDesc: '162',
        templateId: 'templateObj_162',
        baseCode: `<!-- c162 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-grid-img-only-column birch-wrapper-padding-2column-banner-column1 small-12 large-6 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <img class="birch-wrapper-padding-2column-banner-image birch-min-width-300 birch--imgAltTextColor" width="300" height="193" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 300px; outline: none; text-decoration: none; width: auto;">
                    </th></tr></table></th>
        
                    <th class="small-12 large-6 columns last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <table class="wrapper birch-wrapper-padding-2column-banner-column2 birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 27px; padding-right: 27px; text-align: left; vertical-align: top;">
                            <center class="birch-util-mobile-padding-top-50" data-parsed="" style="min-width: initial !important; width: 100%;">
                                <img class="birch--iconAltTextColor float-center" width="50" height="50" src="birch_iconUrl_birch" alt="birch_iconAltText_birch" align="center" style="-ms-interpolation-mode: bicubic; Margin: 0 auto; clear: both; color: birch_iconAltTextColor_birch; display: block; float: none; margin: 0 auto; max-width: 100%; outline: none; text-align: center; text-decoration: none; width: auto;">
                            </center>
                            <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="16px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                            <h1 class="text-center birch-text-styles-h1 birch--h1TextColor birch-util-mobile-padding-top-50 birch-util-mobile-padding-bottom-50" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 21px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 0 !important; padding: 0; text-align: center; word-wrap: normal;">birch_h1Text_birch</h1>
                        </td></tr></table>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
            <table class="wrapper birch-util-background-color-colonial-steel-blue" align="center" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="spacer birch-util-background-color-colonial-steel-blue birch--spacer600wide" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="7px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 7px; font-weight: normal; line-height: 7px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top; width: 600px;">&#xA0;</td></tr></tbody></table> 
                    <!-- manually set width of TD holding &#xA0 to 600px -->
                
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c162 -->`,
        category: 'banners',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-300x200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            iconUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-50.jpg?raw=true',
            iconAltText: '',
            iconAltTextColor: '2E2E2E',
            backgroundColor2: '#f7f7f7',
            h1TextColor: '#19557F',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.'
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-300x200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            iconUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-50.jpg?raw=true',
            iconAltText: '',
            iconAltTextColor: '2E2E2E',
            backgroundColor2: '#f7f7f7',
            h1TextColor: '#19557F',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.'
        }
    } // templateObj_162
    ,
    templateObj_163: {
        templateDesc: '163',
        templateId: 'templateObj_163',
        baseCode: `<!-- c163 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="spacer birch--backgroundColor birch--spacer600wide" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="7px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 7px; font-weight: normal; line-height: 7px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top; width: 600px;">&#xA0;</td></tr></tbody></table> 
                    <!-- manually set width of TD holding &#xA0 to 600px -->
                
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c163 -->`,
        category: 'banners',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#19557F'
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#19557F'
        }
    } // templateObj_163
    ,
    templateObj_200: {
        templateDesc: '200',
        templateId: 'templateObj_200',
        baseCode: `<!-- c200 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                <h1 class="text-center birch-text-styles-h1-large birch--h1TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 24px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h1Text_birch</h1>

                birch_ctaCode_birch

                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c200 -->`,
        category: 'body',
        tags: ['1col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            h1TextColor: '#015294',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            ctaBackgroundColor: '#015294',
            ctaUrl: 'https://www.unum.com',
            ctaTextColor: '#fefefe',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`,
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            h1TextColor: '#19557F',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            ctaBackgroundColor: '#1A8573',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`,
            spacerBottom: '50'
        }
    } // templateObj_200
    ,
    templateObj_201: {
        templateDesc: '201',
        templateId: 'templateObj_201',
        baseCode: `<!-- c201 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                <h1 class="text-center birch-text-styles-h1-large birch--h1TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 24px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h1Text_birch</h1>

                <p class="text-center birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center;">birch_pText_birch</p>

                birch_ctaCode_birch

                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c201 -->`,
        category: 'body',
        tags: ['1col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            h1TextColor: '#015294',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pText: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pTextColor: '#2E2E2E',
            ctaBackgroundColor: '#015294',
            ctaUrl: 'https://www.unum.com',
            ctaTextColor: '#fefefe',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`,
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            textColor: '#19557F',
            h1TextColor: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pText: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pTextColor: '#2E2E2E',
            ctaBackgroundColor: '#1A8573',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`,
            spacerBottom: '50'
        }
    } // templateObj_201
    ,
    templateObj_201c: {
        templateDesc: '201c',
        templateId: 'templateObj_201c',
        baseCode: `<!-- c201c -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                <h1 class="text-center birch-text-styles-h1-large birch--h1TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 24px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h1Text_birch</h1>
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="40px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 40px; font-weight: normal; line-height: 40px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                <p class="text-center birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center;">birch_pText_birch</p>
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c201c -->`,
        category: 'body',
        tags: ['1col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            h1TextColor: '#015294',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pText: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pTextColor: '#2E2E2E',
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            h1TextColor: '#19557F',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pText: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pTextColor: '#2E2E2E',
            spacerBottom: '50'
        }
    } // templateObj_201c
    ,
    templateObj_202: {
        templateDesc: '202',
        templateId: 'templateObj_202',
        baseCode: `<!-- c202 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 

                <h2 class="text-center birch-text-styles-h2 birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h2Text_birch</h2>

                <p class="text-center birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center;">birch_pText_birch</p>

                birch_ctaCode_birch

                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="10px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-weight: normal; line-height: 10px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 

                <p class="text-center birch-text-styles-p" style="Margin: 0; Margin-bottom: 10px; color: #2E2E2E; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center;"><a href="birch_linkUrl_birch" class="birch-text-styles-link birch--linkColor" style="Margin: 0; color: birch_linkColor_birch; font-family: Arial; font-size: 16px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; padding: 0; text-align: center; text-decoration: underline;">birch_linkText_birch</a></p>

                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c202 -->`,
        category: 'body',
        tags: ['1col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            h2TextColor: '#015294',
            h2Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pText: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pTextColor: '#2E2E2E',
            ctaBackgroundColor: '#015294',
            ctaUrl: 'https://www.unum.com',
            ctaTextColor: '#fefefe',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center data-parsed="" style="min-width: initial !important; width: 100%;">
                    <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
                </center>`,
            linkUrl: 'http://www.example.com',
            linkColor: '#015294',
            linkText: 'Mauris non tempor quam, et lacinia sapien',
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            h2TextColor: '#19557F',
            h2Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pText: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pTextColor: '#2E2E2E',
            ctaBackgroundColor: '#1A8573',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`,
            linkUrl: 'http://www.example.com',
            linkColor: '#19557F',
            linkText: 'Mauris non tempor quam, et lacinia sapien',
            spacerBottom: '50'
        }
    } // templateObj_202
    ,
    templateObj_203: {
        templateDesc: '203',
        templateId: 'templateObj_203',
        baseCode: `<!-- c203 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 

                <h1 class="birch-text-styles-h1-large birch--h1TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 24px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: left; word-wrap: normal;">birch_h1Text_birch</h1>

                birch_ctaCode_birch

                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c203 -->`,
        category: 'body',
        tags: ['1col', 'alignedLeft'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            h1TextColor: '#015294',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            ctaBackgroundColor: '#015294',
            ctaUrl: 'https://www.unum.com',
            ctaTextColor: '#fefefe',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<table class="button small-expanded radius birch--ctaButton" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>`,
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            h1TextColor: '#19557F',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            ctaBackgroundColor: '#1A8573',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<table class="button small-expanded radius birch--ctaButton" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>`,
            spacerBottom: '50'
        }
    } // templateObj_203
    ,
    templateObj_204: {
        templateDesc: '204',
        templateId: 'templateObj_204',
        baseCode: `<!-- c204 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                
                birch_h1code_birch

                <p class="birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_pText_birch</p>
                
                birch_ctaCode_birch

                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c204 -->`,
        
        pcode:`<p class="birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_pText_birch</p>`,
        
        category: 'body',
        tags: ['1col', 'alignedLeft'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            h1TextColor: '#015294',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            h1code:`<h1 class="birch-text-styles-h1-large birch--h1TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 24px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: left; word-wrap: normal;">birch_h1Text_birch</h1>`,
            pTextColor: '#2E2E2E',
            pText: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            ctaBackgroundColor: '#015294',
            ctaUrl: 'https://www.unum.com',
            ctaTextColor: '#fefefe',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<table class="button small-expanded radius birch--ctaButton" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>`,
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            h1TextColor: '#19557F',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            h1code:`<h1 class="birch-text-styles-h1-large birch--h1TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 24px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: left; word-wrap: normal;">birch_h1Text_birch</h1>`,
            pTextColor: '#2E2E2E',
            pText: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            ctaBackgroundColor: '#1A8573',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<table class="button small-expanded radius birch--ctaButton" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>`,
            spacerBottom: '50'
        }
    } // templateObj_204
    ,
    templateObj_204e: {
        templateDesc: '204e',
        templateId: 'templateObj_204e',
        baseCode: `<!-- c204e -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">

                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 

                <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="last small-12 large-2 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 16px; text-align: left; width: 84px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">

                        <center data-parsed="" style="min-width: initial !important; width: 100%;"><img src="birch_iconUrl_birch" alt="birch_iconAltText_birch" width="50" height="50" style="-ms-interpolation-mode: bicubic; Margin: 0 auto; clear: both; color: birch_iconAltTextColor_birch; display: block; float: none; height: 50px; margin: 0 auto; max-width: 100%; min-width: 50px; outline: none; text-align: center; text-decoration: none; width: 50px;" class="birch-min-width-50 birch--iconAltTextColor float-center" align="center"></center>

                    </th></tr></table></th>
                    <th class="small-12 large-10 columns last" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0; padding-left: 8px; padding-right: 16px; text-align: left; width: 484px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">

                        <h1 class="birch-text-styles-h1-large birch--h1TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 24px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: left; word-wrap: normal;">birch_h1Text_birch</h1>

                        <p class="birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_pText_birch</p>

                        birch_ctaCode_birch

                    </th></tr></table></th>
                </tr></tbody></table>
                
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c204e -->`,
        category: 'body',
        tags: ['1col', 'alignedLeft'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            iconUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-50.jpg?raw=true',
            iconAltText: '',
            iconAltTextColor: '#2E2E2E',
            h1TextColor: '#015294',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pTextColor: '#2E2E2E',
            pText: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            ctaBackgroundColor: '#015294',
            ctaUrl: 'https://www.unum.com',
            ctaTextColor: '#fefefe',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<table class="button small-expanded radius birch--ctaButton" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>`,
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            iconUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-50.jpg?raw=true',
            iconAltText: '',
            iconAltTextColor: '#2E2E2E',
            h1TextColor: '#19557F',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pTextColor: '#2E2E2E',
            pText: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            ctaBackgroundColor: '#19557F',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<table class="button small-expanded radius birch--ctaButton" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>`,
            spacerBottom: '50'
        }
    } // templateObj_204e
    ,
    templateObj_204i: {
        templateDesc: '204i',
        templateId: 'templateObj_204i',
        baseCode: `<!-- c204i -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">

                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 

                <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="last small-12 large-3 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 16px; text-align: left; width: 134px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">

                        <center data-parsed="" style="min-width: initial !important; width: 100%;"><img src="birch_imgUrl_birch" alt="birch_imgAltText_birch" width="100" height="100" style="-ms-interpolation-mode: bicubic; Margin: 0 auto; clear: both; color: birch_imgAltTextColor_birch; display: block; float: none; height: 100px; margin: 0 auto; max-width: 100%; min-width: 100px; outline: none; text-align: center; text-decoration: none; width: 100px;" class="birch-min-width-100 birch--imgAltTextColor float-center" align="center"></center>

                    </th></tr></table></th>
                    <th class="small-12 large-7 columns last" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0; padding-left: 8px; padding-right: 16px; text-align: left; width: 334px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">

                        <h1 class="birch-text-styles-h1-large birch--h1TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h1TextColor_birch; font-family: Arial; font-size: 24px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: left; word-wrap: normal;">birch_h1Text_birch</h1>

                        <p class="birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_pText_birch</p>

                        birch_ctaCode_birch

                    </th></tr></table></th>
                </tr></tbody></table>
                
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c204i -->`,
        category: 'body',
        tags: ['1col', 'alignedLeft'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-100.jpg?raw=true',
            imgAltText: 'please do not forget me',
            imgAltTextColor: '#2E2E2E',
            h1TextColor: '#015294',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pTextColor: '#2E2E2E',
            pText: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            ctaBackgroundColor: '#015294',
            ctaUrl: 'https://www.unum.com',
            ctaTextColor: '#fefefe',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<table class="button small-expanded radius birch--ctaButton" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>`,
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-100.jpg?raw=true',
            imgAltText: 'please do not forget me',
            imgAltTextColor: '#2E2E2E',
            h1TextColor: '#19557F',
            h1Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pTextColor: '#2E2E2E',
            pText: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            ctaBackgroundColor: '#19557F',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<table class="button small-expanded radius birch--ctaButton" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>`,
            spacerBottom: '50'
        }
    } // templateObj_204i
    ,
    templateObj_205: {
        templateDesc: '205',
        templateId: 'templateObj_205',
        baseCode: `<!-- c205 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                <h2 class="text-center birch-text-styles-h2 birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h2Text_birch</h2>
                
                <ul>
                birch_listItemsAsString_birch
                </ul>

                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c205 -->`,
        category: 'body',
        tags: ['1col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            h2TextColor: '#2E2E2E',
            h2Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            bulletTextColor: '#2E2E2E',
            
            listItemsAsString: '[a]Lorem ipsum dolor, sit amet.|[b]Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse animi, similique libero commodi quos earum.|[c]Lorem ipsum dolor, sit amet.',
            ulStyle: '',
            listItemsAsStringCode: `<li class="birch-text-styles-li" style="font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px">birch_listItemsAsStringItem_birch</li>`,
            //liColor: '#2E2E2E',
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            h2TextColor: '#2E2E2E',
            h2Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            bulletTextColor: '#2E2E2E',
            listItemsAsString: '[a]Lorem ipsum dolor, sit amet.|[b]Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse animi, similique libero commodi quos earum.|[c]Lorem ipsum dolor, sit amet.',
            ulStyle: '; list-style-type:square;',
            listItemsAsStringCode: `<li class="birch-text-styles-li" style="font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px">birch_listItemsAsStringItem_birch</li>`,
            //liColor: '#2E2E2E',
            spacerBottom: '50'
        }
    } // templateObj_205
    ,
    templateObj_205e: {
        templateDesc: '205e',
        templateId: 'templateObj_205e', 
        baseCode: `<!-- c205e -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                <h2 class="birch-text-styles-h2 birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 20px; padding: 0; text-align: left; word-wrap: normal;">birch_h2Text_birch</h2>

                birch_bulletTextList_birch

                birch_ctaCode_birch
                
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c205e -->`,
        category: 'body',
        tags: ['1col', 'alignedLeft'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            h2TextColor: '#2E2E2E',
            h2Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            bulletImageList: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-checkmark.png?raw=true|https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-checkmark.png?raw=true|https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-checkmark.png?raw=true',
            // bulletTextList: 'Item 1|Item 2|Item 3',
            bulletTextList: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus egestas.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus egestas.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus egestas.',
            bulletImage: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-checkmark.png?raw=true',
            //bulletImage2: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-checkmark.png?raw=true',
            //bulletImage3: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-checkmark.png?raw=true',
            bulletCode: `<table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
            <th class="small-2 large-1 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 0; padding-right: 0; text-align: left; width: 58px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;"><img src="birch_repeatingImgUrl_birch" class="birch-min-width-25" alt="" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; min-width: 25px; outline: none; text-decoration: none; width: auto;"></th></tr></table></th><!--  continue here -->
            <th class="small-10 large-11 columns last" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 0; padding-right: 0; text-align: left; width: 558px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;"><p class="birch--bulletTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_bulletTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_repeatingImgText_birch</p></th></tr></table></th>
        </tr></tbody></table>`,
            bulletTextColor: "#2E2E2E",
            ctaBackgroundColor: '#015294',
            ctaUrl: 'https://www.unum.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<table class="button small-expanded radius birch--ctaButton" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>`,
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            h2TextColor: '#2E2E2E',
            h2Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            bulletImageList: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-checkmark.png?raw=true|https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-checkmark.png?raw=true|https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-checkmark.png?raw=true',
            // bulletTextList: 'Item 1|Item 2|Item 3',
            bulletTextList: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus egestas.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus egestas.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus egestas.',
            bulletImage: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-checkmark.png?raw=true',
            //bulletImage2: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-checkmark.png?raw=true',
            //bulletImage3: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-checkmark.png?raw=true',
            bulletCode: `<table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
            <th class="small-2 large-1 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 0; padding-right: 0; text-align: left; width: 58px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;"><img src="birch_repeatingImgUrl_birch" class="birch-min-width-25" alt="" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; min-width: 25px; outline: none; text-decoration: none; width: auto;"></th></tr></table></th><!--  continue here -->
            <th class="small-10 large-11 columns last" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 0; padding-right: 0; text-align: left; width: 558px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;"><p class="birch--bulletTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_bulletTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_repeatingImgText_birch</p></th></tr></table></th>
        </tr></tbody></table>`,
            bulletTextColor: "#2E2E2E",
            ctaBackgroundColor: '#19557F',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<table class="button small-expanded radius birch--ctaButton" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>`,
            spacerBottom: '50'
        }
    } // templateObj_205e
    ,
    templateObj_206: {
        templateDesc: '206',
        templateId: 'templateObj_206',
        baseCode: `<!-- c206 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                <img class="birch-util-full-width birch-min-width-480 birch--imgAltTextColor" width="480" height="200" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 480px; outline: none; text-decoration: none; width: 100%;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="16px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                <h2 class="text-center birch-text-styles-h2 birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h2Text_birch</h2>
                <p class="text-center birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center;">birch_pText_birch</p>
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c206 -->`,
        category: 'body',
        tags: ['1col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-480x200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pTextColor: '#2E2E2E',
            pText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita porro laudantium alias, neque dolor maiores. Tenetur aspernatur, delectus possimus facere sit incidunt? Quasi ipsum distinctio consequuntur delectus quas nulla!',
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-480x200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pTextColor: '#2E2E2E',
            pText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita porro laudantium alias, neque dolor maiores. Tenetur aspernatur, delectus possimus facere sit incidunt? Quasi ipsum distinctio consequuntur delectus quas nulla!',
            spacerBottom: '50'
        }
    } // templateObj_206
    ,
    templateObj_207: {
        templateDesc: '207',
        templateId: 'templateObj_207',
        baseCode: `<!-- c207 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 

                <img class="birch-util-full-width birch-min-width-480 birch--imgAltTextColor" width="480" height="200" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 480px; outline: none; text-decoration: none; width: 100%;">

                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="16px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 

                <h2 class="birch-text-styles-h2 birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left; word-wrap: normal;">birch_h2Text_birch</h2>

                <p class="birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_pText_birch</p>

                birch_ctaCode_birch

                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c207 -->`,
        category: 'body',
        tags: ['1col', 'alignedLeft'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-480x200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pTextColor: '#2E2E2E',
            pText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita porro laudantium alias, neque dolor maiores. Tenetur aspernatur, delectus possimus facere sit incidunt? Quasi ipsum distinctio consequuntur delectus quas nulla!',
            ctaBackgroundColor: '#015294',
            ctaUrl: 'https://www.unum.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<table class="button small-expanded radius birch--ctaButton" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>`,
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-480x200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pTextColor: '#2E2E2E',
            pText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita porro laudantium alias, neque dolor maiores. Tenetur aspernatur, delectus possimus facere sit incidunt? Quasi ipsum distinctio consequuntur delectus quas nulla!',
            ctaBackgroundColor: '#1A8573',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<table class="button small-expanded radius birch--ctaButton" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>`,
            spacerBottom: '50'
        }
    } // templateObj_207
    ,
    templateObj_207b: {
        templateDesc: '207b',
        templateId: 'templateObj_207b',
        baseCode: `<!-- c207b -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 

                <img class="birch-util-full-width birch-min-width-480 birch--imgAltTextColor" width="480" height="200" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 480px; outline: none; text-decoration: none; width: 100%;">

                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="16px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 

                <h2 class="text-center birch-text-styles-h2 birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h2Text_birch</h2>

                <p class="text-center birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center;">birch_pText_birch</p>

                birch_ctaCode_birch

                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c207b -->`,
        category: 'body',
        tags: ['1col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-480x200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pTextColor: '#2E2E2E',
            pText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita porro laudantium alias, neque dolor maiores. Tenetur aspernatur, delectus possimus facere sit incidunt? Quasi ipsum distinctio consequuntur delectus quas nulla!',
            ctaBackgroundColor: '#015294',
            ctaUrl: 'https://www.unum.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`,
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-480x200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
            pTextColor: '#2E2E2E',
            pText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita porro laudantium alias, neque dolor maiores. Tenetur aspernatur, delectus possimus facere sit incidunt? Quasi ipsum distinctio consequuntur delectus quas nulla!',
            ctaBackgroundColor: '#1A8573',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`,
            spacerBottom: '50'
        }
    } // templateObj_207b
    ,
    templateObj_208: {
        templateDesc: '208',
        templateId: 'templateObj_208',
        baseCode: `<!-- c208 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding-full birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 50px; text-align: left; vertical-align: top;">
                <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-grid-img-only-column small-12 large-6 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <img class="birch-util-mobile-center birch-min-width-200 birch--imgAltTextColor" width="200" height="200" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 200px; outline: none; text-decoration: none; width: auto;">
                    </th></tr></table></th>
        
                    <th class="small-12 large-6 columns last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <h2 class="text-center birch-text-styles-h2 birch-grid-small-padding-top birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h2Text_birch</h2>
                        <p class="text-center birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center;">birch_pText_birch</p>
                        <center data-parsed="" style="min-width: initial !important; width: 100%;"><!-- to match width of components with a center element --></center>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c208 -->`,
        category: 'body',
        tags: ['2col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor: '#2E2E2E',
            pText: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor: '#2E2E2E',
            pText: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            spacerBottom: '50'
        }
    } // templateObj_208
    ,
    templateObj_208b: {
        templateDesc: '208b',
        templateId: 'templateObj_208b',
        baseCode: `<!-- c208b -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding-full birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 50px; text-align: left; vertical-align: top;">
                <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="small-12 large-6 columns first" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <h2 class="text-center birch-text-styles-h2 birch-grid-small-padding-top birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h2Text_birch</h2>
                        <p class="text-center birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center;">birch_pText_birch</p>
                        <center data-parsed="" style="min-width: initial !important; width: 100%;"><!-- to match width of components with a center element --></center>
                    </th></tr></table></th>
        
                    <th class="birch-grid-img-only-column align-right-desktop small-12 large-6 columns last" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: right; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: right; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: right; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: right;">
                        <img class="birch-util-mobile-center birch-min-width-200 birch-util-img-float-right-desktop birch--imgAltTextColor" width="200" height="200" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; float: right; max-width: 100%; min-width: 200px; outline: none; text-decoration: none; width: auto;">
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c208b -->`,
        category: 'body',
        tags: ['2col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor: '#2E2E2E',
            pText: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor: '#2E2E2E',
            pText: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            spacerBottom: '50'
        }
    } // templateObj_208b
    ,
    templateObj_209: {
        templateDesc: '209',
        templateId: 'templateObj_209',
        baseCode: `<!-- c209 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding-full birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 50px; text-align: left; vertical-align: top;">
                <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-grid-img-only-column small-12 large-6 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <img class="birch-util-mobile-center birch-min-width-200 birch--imgAltTextColor" width="200" height="200" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 200px; outline: none; text-decoration: none; width: auto;">
                    </th></tr></table></th>
        
                    <th class="small-12 large-6 columns last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <table class="spacer birch-small-only" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="16px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 

                        <h2 class="text-center birch-text-styles-h2 birch-grid-small-padding-top birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h2Text_birch</h2>

                        <p class="text-center birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center;">birch_pText_birch</p>

                        birch_ctaCode_birch

                        <table class="spacer birch-small-only" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="16px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c209 -->`,
        category: 'body',
        tags: ['2col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor: '#2E2E2E',
            pText: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            ctaBackgroundColor: '#015294',
            ctaUrl: 'https://www.unum.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`,
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor: '#2E2E2E',
            pText: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            ctaBackgroundColor: '#1A8573',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`,
            spacerBottom: '50'
        }
    } // templateObj_209
    ,
    templateObj_210: {
        templateDesc: '210',
        templateId: 'templateObj_210',
        baseCode: `<!-- c210 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding-full birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 50px; text-align: left; vertical-align: top;">
                <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-grid-img-only-column small-12 large-6 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <img class="birch-util-mobile-center birch-min-width-200 birch--imgAltTextColor" width="200" height="200" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 200px; outline: none; text-decoration: none; width: auto;">
                    </th></tr></table></th>
        
                    <th class="small-12 large-6 columns last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <center class="birch-util-mobile-padding-top-50" data-parsed="" style="min-width: initial !important; width: 100%;">
                            <img class="birch-min-width-50 birch--iconAltTextColor float-center" width="50" height="50" src="birch_iconUrl_birch" alt="birch_iconAltText_birch" align="center" style="-ms-interpolation-mode: bicubic; Margin: 0 auto; clear: both; color: birch_iconAltTextColor_birch; display: block; float: none; margin: 0 auto; max-width: 100%; min-width: 50px; outline: none; text-align: center; text-decoration: none; width: auto;">
                        </center>
                        <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="16px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                        <h2 class="text-center birch-text-styles-h2 birch-grid-small-padding-top birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h2Text_birch</h2>
                        <table class="spacer birch-small-only" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="16px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c210 -->`,
        category: 'body',
        tags: ['2col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            iconUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-50.jpg?raw=true',
            iconAltText: '',
            iconAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Mauris non tempor quam, et lacinia sapien:',
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            iconUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-50.jpg?raw=true',
            iconAltText: '',
            iconAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Mauris non tempor quam, et lacinia sapien:',
            spacerBottom: '50'
        }
    } // templateObj_210
    ,
    templateObj_211: {
        templateDesc: '211',
        templateId: 'templateObj_211',
        baseCode: `<!-- c211 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding-full birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 50px; text-align: left; vertical-align: top;">
                <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-grid-column1 small-12 large-6 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0 !important; padding-bottom: 16px; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <img class="birch-util-mobile-center birch-min-width-200 birch--imgAltTextColor" width="200" height="200" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 200px; outline: none; text-decoration: none; width: auto;">
                    </th></tr></table></th>
        
                    <th class="birch-grid-column2-left-half-padding small-12 large-6 columns last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; padding-top: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <center data-parsed="" style="min-width: initial !important; width: 100%;">
                            <img class="birch-min-width-50 birch--iconAltTextColor float-center" width="50" height="50" src="birch_iconUrl_birch" alt="birch_iconAltText_birch" align="center" style="-ms-interpolation-mode: bicubic; Margin: 0 auto; clear: both; color: birch_iconAltTextColor_birch; display: block; float: none; margin: 0 auto; max-width: 100%; min-width: 50px; outline: none; text-align: center; text-decoration: none; width: auto;">
                        </center>

                        <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="16px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 

                        <h2 class="text-center birch-text-styles-h2 birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h2Text_birch</h2>

                        birch_ctaCode_birch

                        <table class="spacer birch-small-only" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="16px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c211 -->`,
        category: 'body',
        tags: ['2col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            iconUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-50.jpg?raw=true',
            iconAltText: '',
            iconAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Mauris non tempor quam, et lacinia sapien:',
            ctaBackgroundColor: '#015294',
            ctaUrl: 'https://www.unum.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`,
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            iconUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-50.jpg?raw=true',
            iconAltText: '',
            iconAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Mauris non tempor quam, et lacinia sapien:',
            ctaBackgroundColor: '#1A8573',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<center data-parsed="" style="min-width: initial !important; width: 100%;">
            <table class="button small-expanded radius birch--ctaButton float-center" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; float: none; margin: 0; padding: 0; text-align: center; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>
        </center>`,
            spacerBottom: '50'
        }
    } // templateObj_211
    ,
    templateObj_212: {
        templateDesc: '212',
        templateId: 'templateObj_212',
        baseCode: `<!-- c212 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding-full birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 50px; text-align: left; vertical-align: top;">
                <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-grid-column1 small-12 large-6 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0 !important; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <img class="birch-util-mobile-center birch-min-width-200 birch--imgAltTextColor" width="200" height="200" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 200px; outline: none; text-decoration: none; width: auto;">
                    </th></tr></table></th>
        
                    <th class="birch-grid-column2-left-half-padding small-12 large-6 columns last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; padding-top: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <center data-parsed="" style="min-width: initial !important; width: 100%;">
                            <img class="birch-min-width-50 birch--iconAltTextColor float-center" width="50" height="50" src="birch_iconUrl_birch" alt="birch_iconAltText_birch" align="center" style="-ms-interpolation-mode: bicubic; Margin: 0 auto; clear: both; color: birch_iconAltTextColor_birch; display: block; float: none; margin: 0 auto; max-width: 100%; min-width: 50px; outline: none; text-align: center; text-decoration: none; width: auto;">
                        </center>
                        <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="16px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                        <h2 class="text-center birch-text-styles-h2 birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h2Text_birch</h2>
                        <p class="text-center birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center;">birch_pText_birch</p>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c212 -->`,
        category: 'body',
        tags: ['2col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            iconUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-50.jpg?raw=true',
            iconAltText: '',
            iconAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor: '#2E2E2E',
            pText: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            iconUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-50.jpg?raw=true',
            iconAltText: '',
            iconAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor: '#2E2E2E',
            pText: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            ctaBackgroundColor: '#1A8573',
            spacerBottom: '50'
        }
    } // templateObj_212
    ,
    templateObj_213: {
        templateDesc: '213',
        templateId: 'templateObj_213',
        baseCode: `<!-- c213 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="small-12 large-6 columns first" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 16px; padding-right: 8px; text-align: left; width: 284px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <table class="wrapper birch-wrapper-padding-2column-first birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 50px; padding-right: 25px; text-align: left; vertical-align: top;">
                            <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                            <h2 class="text-center birch-text-styles-h2 birch-grid-small-padding-top birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h2Text1_birch</h2>
                            <p class="text-center birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center;">birch_pText1_birch</p>
                            <table class="spacer show-for-large" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="40px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 40px; font-weight: normal; line-height: 40px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                        </td></tr></table>
                    </th></tr></table></th>
        
                    <th class="small-12 large-6 columns last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 8px; padding-right: 16px; text-align: left; width: 284px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <table class="wrapper birch-wrapper-padding-2column-second birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 25px; padding-right: 50px; text-align: left; vertical-align: top;">
                            <table class="spacer show-for-large" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                            <h2 class="text-center birch-text-styles-h2 birch-grid-small-padding-top birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h2Text2_birch</h2>
                            <p class="text-center birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center;">birch_pText2_birch</p>
                            <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="40px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 40px; font-weight: normal; line-height: 40px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                        </td></tr></table>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c213 -->`,
        category: 'body',
        tags: ['2col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            h2TextColor: '#2E2E2E',
            h2Text1: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor: '#2E2E2E',
            pText1: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            //h2TextColor2: '#2E2E2E',
            h2Text2: 'Mauris non tempor quam, et lacinia sapien:',
            //pTextColor2: '#2E2E2E',
            pText2: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            spacerBottom: '50'     
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            h2TextColor1: '#2E2E2E',
            h2Text1: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor1: '#2E2E2E',
            pText1: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            h2TextColor2: '#2E2E2E',
            h2Text2: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor2: '#2E2E2E',
            pText2: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            spacerBottom: '50'  
        }
    } // templateObj_213
    ,
    templateObj_214: {
        templateDesc: '214',
        templateId: 'templateObj_214',
        baseCode: `<!-- c214 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding-full birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 50px; text-align: left; vertical-align: top;">
                <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-grid-column1 small-12 large-6 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0 !important; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <img class="birch-util-mobile-center birch-min-width-200 birch--imgAltTextColor" width="200" height="200" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 200px; outline: none; text-decoration: none; width: auto;">
                    </th></tr></table></th>
        
                    <th class="birch-grid-column2-left-half-padding small-12 large-6 columns last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; padding-top: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <h2 class="birch-text-styles-h2 birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left; word-wrap: normal;">birch_h2Text_birch</h2>
                        <p class="birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_pText_birch</p>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c214 -->`,
        category: 'body',
        tags: ['2col', 'alignedLeft'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor: '#2E2E2E',
            pText: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            spacerBottom: '50'    
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor: '#2E2E2E',
            pText: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            spacerBottom: '50' 
        }
    } // templateObj_214
    ,
    templateObj_215: {
        templateDesc: '215',
        templateId: 'templateObj_215',
        baseCode: `<!-- c215 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="small-12 large-6 columns first" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0 !important; padding-right: 0 !important; text-align: left; width: 284px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <table class="wrapper birch-wrapper-padding-2column-first birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 50px; padding-right: 25px; text-align: left; vertical-align: top;">
                            <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                            <center data-parsed="" style="min-width: initial !important; width: 100%;">
                                <img class="birch-util-mobile-center birch-min-width-200 birch--imgAltTextColor float-center" width="200" height="200" src="birch_imgUrl1_birch" alt="birch_imgAltText1_birch" align="center" style="-ms-interpolation-mode: bicubic; Margin: 0 auto; clear: both; color: birch_imgAltTextColor_birch; display: block; float: none; margin: 0 auto; max-width: 100%; min-width: 200px; outline: none; text-align: center; text-decoration: none; width: auto;">
                            </center>
                            <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="16px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                            <h2 class="text-center birch-text-styles-h2 birch-grid-small-padding-top birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h2Text1_birch</h2>
                            <p class="text-center birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center;">birch_pText1_birch</p>
                            <table class="spacer show-for-large" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="40px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 40px; font-weight: normal; line-height: 40px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                        </td></tr></table>
                    </th></tr></table></th>
        
                    <th class="small-12 large-6 columns last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0 !important; padding-right: 0 !important; text-align: left; width: 284px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <table class="wrapper birch-wrapper-padding-2column-second birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 25px; padding-right: 50px; text-align: left; vertical-align: top;">
                            <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                            <center data-parsed="" style="min-width: initial !important; width: 100%;">
                                <img class="birch-util-mobile-center birch-min-width-200 birch--imgAltTextColor float-center" width="200" height="200" src="birch_imgUrl2_birch" alt="birch_imgAltText2_birch" align="center" style="-ms-interpolation-mode: bicubic; Margin: 0 auto; clear: both; color: birch_imgAltTextColor_birch; display: block; float: none; margin: 0 auto; max-width: 100%; min-width: 200px; outline: none; text-align: center; text-decoration: none; width: auto;">
                            </center>
                            <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="16px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                            <h2 class="text-center birch-text-styles-h2 birch-grid-small-padding-top birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center; word-wrap: normal;">birch_h2Text2_birch</h2>
                            <p class="text-center birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: center;">birch_pText2_birch</p>
                            <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="40px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 40px; font-weight: normal; line-height: 40px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                        </td></tr></table>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c215 -->`,
        category: 'body',
        tags: ['2col', 'alignedCenter'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            imgUrl1: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText1: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text1: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor: '#2E2E2E',
            pText1: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            imgUrl2: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText2: 'ALT tags are important',
            //imgAltText2Color: '#2E2E2E',
            //h2TextColor2: '#2E2E2E',
            h2Text2: 'Mauris non tempor quam, et lacinia sapien:',
            //pTextColor2: '#2E2E2E',
            pText2: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.'
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            imgUrl1: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText1: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text1: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor: '#2E2E2E',
            pText1: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            imgUrl2: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText2: 'ALT tags are important',
            //imgAltText2Color: '#2E2E2E',
            //h2TextColor2: '#2E2E2E',
            h2Text2: 'Mauris non tempor quam, et lacinia sapien:',
            //pTextColor2: '#2E2E2E',
            pText2: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.'
        }
    } // templateObj_215
    ,
    templateObj_216: {
        templateDesc: '216',
        templateId: 'templateObj_216',
        baseCode: `<!-- c216 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding-full birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 50px; text-align: left; vertical-align: top;">
                <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="birch-grid-column1 small-12 large-6 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0 !important; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <img class="birch-util-mobile-center birch-min-width-200 birch--imgAltTextColor" width="200" height="200" src="birch_imgUrl_birch" alt="birch_imgAltText_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 200px; outline: none; text-decoration: none; width: auto;">
                    </th></tr></table></th>
        
                    <th class="birch-grid-column2-left-half-padding small-12 large-6 columns last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0; padding-right: 0; padding-top: 0; text-align: left; width: 308px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <h2 class="birch-text-styles-h2 birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left; word-wrap: normal;">birch_h2Text_birch</h2>

                        <p class="birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_pText_birch</p>

                        birch_ctaCode_birch

                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c216 -->`,
        category: 'body',
        tags: ['2col', 'alignedLeft'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor: '#2E2E2E',
            pText: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            ctaBackgroundColor: '#015294',
            ctaUrl: 'https://www.unum.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<table class="button small-expanded radius birch--ctaButton" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>`,
            spacerBottom: '50'    
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            spacerTop: '50',
            imgUrl: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor: '#2E2E2E',
            pText: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            ctaBackgroundColor: '#1A8573',
            ctaUrl: 'https://www.coloniallife.com',
            ctaTextColor: 'white',
            ctaText: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode: `<table class="button small-expanded radius birch--ctaButton" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor_birch; border-radius: 3px; color: birch_ctaTextColor_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText_birch</a></td></tr></table></td></tr></table>`,
            spacerBottom: '50' 
        }
    } // templateObj_216
    ,
    templateObj_217: {
        templateDesc: '217',
        templateId: 'templateObj_217',
        baseCode: `<!-- c217 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="small-12 large-6 columns first" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0 !important; padding-right: 0 !important; text-align: left; width: 284px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <table class="wrapper birch-wrapper-padding-2column-first birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 50px; padding-right: 25px; text-align: left; vertical-align: top;">
                            <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 

                            <img class="birch-util-mobile-center birch-min-width-200 birch--imgAltTextColor" width="200" height="200" src="birch_imgUrl1_birch" alt="birch_imgAltText1_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 200px; outline: none; text-decoration: none; width: auto;">

                            <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="16px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table>

                            <h2 class="birch-text-styles-h2 birch-grid-small-padding-top birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left; word-wrap: normal;">birch_h2Text1_birch</h2>

                            <p class="birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_pText1_birch</p>

                            birch_ctaCode1_birch

                            <table class="spacer show-for-large" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="40px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 40px; font-weight: normal; line-height: 40px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                        </td></tr></table>
                    </th></tr></table></th>
        
                    <th class="small-12 large-6 columns last" valign="middle" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 0 !important; padding-left: 0 !important; padding-right: 0 !important; text-align: left; width: 284px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;">
                        <table class="wrapper birch-wrapper-padding-2column-second birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 25px; padding-right: 50px; text-align: left; vertical-align: top;">
                            <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 

                            <img class="birch-util-mobile-center birch-min-width-200 birch--imgAltTextColor" width="200" height="200" src="birch_imgUrl2_birch" alt="birch_imgAltText2_birch" style="-ms-interpolation-mode: bicubic; clear: both; color: birch_imgAltTextColor_birch; display: block; max-width: 100%; min-width: 200px; outline: none; text-decoration: none; width: auto;">

                            <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="16px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 16px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 

                            <h2 class="birch-text-styles-h2 birch-grid-small-padding-top birch--h2TextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_h2TextColor_birch; font-family: Arial; font-size: 20px; font-style: normal; font-weight: bold; line-height: 21px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left; word-wrap: normal;">birch_h2Text2_birch</h2>

                            <p class="birch-text-styles-p birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_pText2_birch</p>

                            birch_ctaCode2_birch

                            <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="40px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 40px; font-weight: normal; line-height: 40px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                        </td></tr></table>
                    </th></tr></table></th>
                </tr></tbody></table>
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c217 -->`,
        category: 'body',
        tags: ['2col', 'alignedLeft'],
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            imgUrl1: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText1: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text1: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor: '#2E2E2E',
            pText1: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            ctaBackgroundColor1: '#015294',
            ctaUrl1: 'https://www.unum.com',
            ctaTextColor1: 'white',
            ctaText1: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode1: `<table class="button small-expanded radius birch--ctaButton1" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor1_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl1_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor1_birch; border-radius: 3px; color: birch_ctaTextColor1_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText1_birch</a></td></tr></table></td></tr></table>`,
            imgUrl2: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText2: 'ALT tags are important',
            //imgAltText2Color: '#2E2E2E',
            //h2TextColor2: '#2E2E2E',
            h2Text2: 'Mauris non tempor quam, et lacinia sapien:',
            //pTextColor2: '#2E2E2E',
            pText2: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            ctaBackgroundColor2: '#015294',
            ctaUrl2: 'https://www.unum.com',
            ctaTextColor2: 'white',
            ctaText2: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode2: `<table class="button small-expanded radius birch--ctaButton2" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor2_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl2_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor2_birch; border-radius: 3px; color: birch_ctaTextColor2_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText2_birch</a></td></tr></table></td></tr></table>`
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#f7f7f7',
            imgUrl1: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText1: 'ALT tags are important',
            imgAltTextColor: '#2E2E2E',
            h2TextColor: '#2E2E2E',
            h2Text1: 'Mauris non tempor quam, et lacinia sapien:',
            pTextColor: '#2E2E2E',
            pText1: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            ctaBackgroundColor1: '#1A8573',
            ctaUrl1: 'https://www.coloniallife.com',
            ctaTextColor1: 'white',
            ctaText1: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode1: `<table class="button small-expanded radius birch--ctaButton1" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor1_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl1_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor1_birch; border-radius: 3px; color: birch_ctaTextColor1_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText1_birch</a></td></tr></table></td></tr></table>`,
            imgUrl2: 'https://github.com/unumux/birch-builder-2/blob/master/images/components/image-placeholder-200.jpg?raw=true',
            imgAltText2: 'ALT tags are important',
            //imgAltText2Color: '#2E2E2E',
            //h2TextColor2: '#2E2E2E',
            h2Text2: 'Mauris non tempor quam, et lacinia sapien:',
            //pTextColor2: '#2E2E2E',
            pText2: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget lobero posuere vulputate.',
            ctaBackgroundColor2: '#1A8573',
            ctaUrl2: 'https://www.coloniallife.com',
            ctaTextColor2: 'white',
            ctaText2: 'Call-to-action&nbsp;&rsaquo;',
            ctaCode2: `<table class="button small-expanded radius birch--ctaButton2" style="Margin: 0 0 16px 0; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; text-align: left; vertical-align: top; width: auto;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; background: birch_ctaBackgroundColor2_birch; border: none; border-collapse: collapse !important; border-radius: 3px; color: #fefefe; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="birch_ctaUrl2_birch" style="Margin: 0; border: 0px solid birch_ctaTextColor2_birch; border-radius: 3px; color: birch_ctaTextColor2_birch; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 8px 16px 8px 16px; text-align: left; text-decoration: none;">birch_ctaText2_birch</a></td></tr></table></td></tr></table>`
        }
    } // templateObj_217
    ,
    templateObj_300: {
        templateDesc: '300',
        templateId: 'templateObj_300',
        baseCode: `<!-- c300 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                <p class="birch-text-styles-p--legal birch--pTextColor hb-footerUwStatementAndDisclosures" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_footerUwStatementAndDisclosures_birch</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">&copy; birch_year_birch Unum Group. All rights reserved. Unum is a registered trademark and marketing brand of Unum Group and its insuring subsidiaries.</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">You are receiving this email at <a name="myname" xt="SPNOTRACK" class="birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: underline;" href="_mailto:%%EMAIL%%">%%EMAIL%%</a>.
                    <a href="#SPONECLICKOPTOUT" id="unsubscribe" name="unsubscribe" class="birch-text-styles-link--legal birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; padding: 0; text-align: center; text-decoration: underline;">Click here to unsubscribe</a>
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">
                    <a href="https://www.unum.com" class="birch-text-styles-link--legal birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; padding: 0; text-align: center; text-decoration: underline;">unum.com</a>
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">Unum - One Fountain Square - Chattanooga, TN 37402 - US - <a href="https://www.unum.com/privacy" class="birch-text-styles-link--legal birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; padding: 0; text-align: center; text-decoration: underline;">privacy policy</a></p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor hb-footerTrackingNumber" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">{{footerTrackingNumber}} {{footerAudience}}</p>
                
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="100px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 100px; font-weight: normal; line-height: 100px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c300 -->`,
        category: 'footer',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#015294',
            pTextColor: 'white',
            footerUwStatementAndDisclosures: 'Unum insurance products are underwritten by the subsidiaries of Unum Group. Dental/Vision plans are marketed by Unum and underwritten by Starmount.',
            year: dt.getFullYear(),
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: 'white',
            pTextColor: '#2E2E2E',
            footerUwStatementAndDisclosures: 'Unum insurance products are underwritten by the subsidiaries of Unum Group. Dental/Vision plans are marketed by Unum and underwritten by Starmount.',
            year: dt.getFullYear(),
        }
    } // templateObj_300
    ,
    templateObj_301: {
        templateDesc: '301',
        templateId: 'templateObj_301',
        baseCode: `<!-- c301 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                <p class="birch--pTextColor birch-text-styles-p--legal" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">
                    <a href="birch_emailLinkUrl_birch" class="birch--pTextColor birch-text-styles-link--contact" style="Margin: 0; color: birch_pTextColor_birch; font-family: Arial; font-size: 14px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; padding: 0; text-align: center; text-decoration: underline;">birch_emailLinkText_birch</a> &nbsp;&nbsp;&nbsp;
                    <a href="birch_loginLinkUrl_birch" class="birch--pTextColor birch-text-styles-link--contact" style="Margin: 0; color: birch_pTextColor_birch; font-family: Arial; font-size: 14px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; padding: 0; text-align: center; text-decoration: underline;">birch_loginLinkText_birch</a> &nbsp;&nbsp;&nbsp;
                    <a href="birch_callLinkUrl_birch" class="birch--pTextColor birch-text-styles-link--contact" style="Margin: 0; color: birch_pTextColor_birch; font-family: Arial; font-size: 14px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; padding: 0; text-align: center; text-decoration: underline;">birch_callLinkText_birch</a>
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="10px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-weight: normal; line-height: 10px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal hb-footerUwStatementAndDisclosures birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_footerUwStatementAndDisclosures_birch</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">&copy; birch_year_birch Unum Group. All rights reserved. Unum is a registered trademark and marketing brand of Unum Group and its insuring subsidiaries. Starmount Life Insurance Company is the insurer of this policy and a member of the Unum Group family of licensed insurers.</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">You are receiving this email at <a name="myname" xt="SPNOTRACK" class="birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: underline;" href="_mailto:%%EMAIL%%">%%EMAIL%%</a>.
                    <a href="#SPONECLICKOPTOUT" id="unsubscribe" name="unsubscribe" class="birch-text-styles-link--legal birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; padding: 0; text-align: center; text-decoration: underline;">Click here to unsubscribe</a>
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">
                    <a href="https://www.unum.com" class="birch-text-styles-link--legal birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; padding: 0; text-align: center; text-decoration: underline;">unum.com</a>
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">Unum - One Fountain Square - Chattanooga, TN 37402 - US - <a href="https://www.unum.com/privacy" class="birch-text-styles-link--legal birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; padding: 0; text-align: center; text-decoration: underline;">privacy policy</a></p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">{{footerTrackingNumber}} {{footerAudience}}</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="100px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 100px; font-weight: normal; line-height: 100px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c301 -->`,
        category: 'footer',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#015294',
            pTextColor: 'white',
            emailLinkUrl: 'http://www.example.com',
            emailLinkText: 'EMAIL US',
            loginLinkUrl: 'http://www.example.com',
            loginLinkText: 'LOGIN',
            callLinkUrl: 'tel:+18002758686',
            callLinkText: 'CALL US: 1.800.275.8686',
            footerUwStatementAndDisclosures: 'Unum insurance products are underwritten by the subsidiaries of Unum Group. Dental/Vision plans are marketed by Unum and underwritten by Starmount.',
            year: dt.getFullYear()
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#015294',
            pTextColor: 'white',
            emailLinkUrl: 'http://www.example.com',
            emailLinkText: 'EMAIL US',
            loginLinkUrl: 'http://www.example.com',
            loginLinkText: 'LOGIN',
            callLinkUrl: 'tel:+18002758686',
            callLinkText: 'CALL US: 1.800.275.8686',
            footerUwStatementAndDisclosures: 'Unum insurance products are underwritten by the subsidiaries of Unum Group. Dental/Vision plans are marketed by Unum and underwritten by Starmount.',
            year: dt.getFullYear()
        }
    } // templateObj_301
    ,
    templateObj_302: {
        templateDesc: '302',
        templateId: 'templateObj_302',
        baseCode: `<!-- c302 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                <p class="birch--pTextColor birch-text-styles-p--products" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">
                    Disability &bull; Life &bull; Accident &bull; Critical Illness &bull; Hospital &bull; Dental &bull; Vision
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="20px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 20px; font-weight: normal; line-height: 20px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor hb-footerUwStatementAndDisclosures" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_footerUwStatementAndDisclosures_birch</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">&copy; birch_year_birch Unum Group. All rights reserved. Unum is a registered trademark and marketing brand of Unum Group and its insuring subsidiaries. Starmount Life Insurance Company is the insurer of this policy and a member of the Unum Group family of licensed insurers.</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">You are receiving this email at <a name="myname" xt="SPNOTRACK" class="birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: underline;" href="_mailto:%%EMAIL%%">%%EMAIL%%</a>.
                    <a href="#SPONECLICKOPTOUT" id="unsubscribe" name="unsubscribe" class="birch-text-styles-link--legal birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; padding: 0; text-align: center; text-decoration: underline;">Click here to unsubscribe</a>
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">
                    <a href="https://www.unum.com" class="birch-text-styles-link--legal birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; padding: 0; text-align: center; text-decoration: underline;">unum.com</a>
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">Unum - One Fountain Square - Chattanooga, TN 37402 - US - <a href="https://www.unum.com/privacy" class="birch-text-styles-link--legal birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; padding: 0; text-align: center; text-decoration: underline;">privacy policy</a></p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">{{footerTrackingNumber}} {{footerAudience}}</p>
                
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="100px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 100px; font-weight: normal; line-height: 100px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c302 -->`,
        category: 'footer',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#015294',
            pTextColor: 'white',
            footerUwStatementAndDisclosures: 'Unum insurance products are underwritten by the subsidiaries of Unum Group. Dental/Vision plans are marketed by Unum and underwritten by Starmount.',
            year: dt.getFullYear()
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#015294',
            pTextColor: 'white',
            footerUwStatementAndDisclosures: 'Unum insurance products are underwritten by the subsidiaries of Unum Group. Dental/Vision plans are marketed by Unum and underwritten by Starmount.',
            year: dt.getFullYear()
        }
    } // templateObj_302
    ,
    templateObj_302s: {
        templateDesc: '302s',
        templateId: 'templateObj_302s',
        baseCode: `<!-- c302s -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="https://twitter.com/unumnews" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;"><img width="25" height="25" src="https://github.com/unumux/birch-builder-2/blob/master/images/components/unum-twitter-icon.png?raw=true" alt="twitter" style="-ms-interpolation-mode: bicubic; border: none; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none; width: auto;"></a></td>
                    <td width="20" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">&nbsp;</td>
                    <td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="https://www.facebook.com/unumbenefits/" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;"><img width="25" height="25" src="https://github.com/unumux/birch-builder-2/blob/master/images/components/iunum-facebook-icon.png?raw=true" alt="facebook" style="-ms-interpolation-mode: bicubic; border: none; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none; width: auto;"></a></td>
                    <td width="20" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">&nbsp;</td>
                    <td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="https://www.linkedin.com/company/unum" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;"><img width="25" height="25" src="https://github.com/unumux/birch-builder-2/blob/master/images/components/unum-linkedin-icon.png?raw=true" alt="linkedin" style="-ms-interpolation-mode: bicubic; border: none; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none; width: auto;"></a></td>
                </tr></tbody></table>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="20px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 20px; font-weight: normal; line-height: 20px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch--pTextColor birch-text-styles-p--products" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">
                    Disability &bull; Life &bull; Accident &bull; Critical Illness &bull; Hospital &bull; Dental &bull; Vision
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="20px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 20px; font-weight: normal; line-height: 20px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor hb-footerUwStatementAndDisclosures" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_footerUwStatementAndDisclosures_birch</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">&copy; birch_year_birch Unum Group. All rights reserved. Unum is a registered trademark and marketing brand of Unum Group and its insuring subsidiaries. Starmount Life Insurance Company is the insurer of this policy and a member of the Unum Group family of licensed insurers.</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">You are receiving this email at <a name="myname" xt="SPNOTRACK" class="birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: underline;" href="_mailto:%%EMAIL%%">%%EMAIL%%</a>.
                    <a href="#SPONECLICKOPTOUT" id="unsubscribe" name="unsubscribe" class="birch-text-styles-link--legal birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; padding: 0; text-align: center; text-decoration: underline;">Click here to unsubscribe</a>
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">
                    <a href="https://www.unum.com" class="birch-text-styles-link--legal birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; padding: 0; text-align: center; text-decoration: underline;">unum.com</a>
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">Unum - One Fountain Square - Chattanooga, TN 37402 - US - <a href="https://www.unum.com/privacy" class="birch-text-styles-link--legal birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; padding: 0; text-align: center; text-decoration: underline;">privacy policy</a></p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">{{footerTrackingNumber}} {{footerAudience}}</p>
                
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="100px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 100px; font-weight: normal; line-height: 100px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c302s -->`,
        category: 'footer',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#015294',
            pTextColor: 'white',
            footerUwStatementAndDisclosures: 'Unum insurance products are underwritten by the subsidiaries of Unum Group. Dental/Vision plans are marketed by Unum and underwritten by Starmount.',
            year: dt.getFullYear()
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: '#015294',
            pTextColor: 'white',
            footerUwStatementAndDisclosures: 'Unum insurance products are underwritten by the subsidiaries of Unum Group. Dental/Vision plans are marketed by Unum and underwritten by Starmount.',
            year: dt.getFullYear()
        }
    } // templateObj_302s
    ,
    templateObj_320: {
        templateDesc: '320',
        templateId: 'templateObj_320',
        baseCode: `<!-- c320 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-util-background-color-colonial-steel-blue" align="center" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="spacer birch-util-background-color-colonial-steel-blue birch--spacer600wide" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="7px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 7px; font-weight: normal; line-height: 7px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top; width: 600px;">&#xA0;</td></tr></tbody></table> 
                    <!-- manually set width of TD holding &#xA0 to 600px -->
                
            </td></tr></table>
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                <p class="birch-text-styles-p--products birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">
                    Accident &#9642; Cancer &#9642; Critical Illness &#9642; Dental &#9642; Disability &#9642; Hospital Indemnity &#9642; Life  
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="20px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 20px; font-weight: normal; line-height: 20px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal hb-footerUwStatementAndDisclosures birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_footerUwStatementAndDisclosures_birch</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">&copy; birch_year_birch Colonial Life &amp; Accident Insurance Company. All rights reserved. Colonial Life is a registered trademark and marketing brand of Colonial Life &amp; Accident Insurance Company.</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">You are receiving this email at <a name="myname" xt="SPNOTRACK" class="birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: underline;" href="_mailto:%%EMAIL%%">%%EMAIL%%</a>.
                    <a href="#SPONECLICKOPTOUT" id="unsubscribe" name="unsubscribe" class="footer-link-basic birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: underline;">Click here to unsubscribe</a>
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">{{footerTrackingNumber}}</p>
                
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="100px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 100px; font-weight: normal; line-height: 100px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c320 -->`,
        category: 'footer',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: 'white',
            pTextColor: '#2E2E2E',
            footerUwStatementAndDisclosures: 'Insurance products are underwritten by Colonial Life & Accident Insurance Company, Columbia, SC.',
            year: dt.getFullYear()
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: 'white',
            pTextColor: '#2E2E2E',
            footerUwStatementAndDisclosures: 'Insurance products are underwritten by Colonial Life & Accident Insurance Company, Columbia, SC.',
            year: dt.getFullYear()
        }
    } // templateObj_320
    ,
    templateObj_320s: {
        templateDesc: '320s',
        templateId: 'templateObj_320s',
        baseCode: `<!-- c320s -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-util-background-color-colonial-steel-blue" align="center" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="spacer birch-util-background-color-colonial-steel-blue birch--spacer600wide" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="7px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 7px; font-weight: normal; line-height: 7px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top; width: 600px;">&#xA0;</td></tr></tbody></table> 
                    <!-- manually set width of TD holding &#xA0 to 600px -->
                
            </td></tr></table>
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="https://twitter.com/ColonialLife" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;"><img width="25" height="25" src="https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-twitter-icon.png?raw=true" alt="twitter" style="-ms-interpolation-mode: bicubic; border: none; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none; width: auto;"></a></td>
                    <td width="20" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">&nbsp;</td>
                    <td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="https://www.facebook.com/coloniallifebenefits/" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;"><img width="25" height="25" src="https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-facebook-icon.png?raw=true" alt="facebook" style="-ms-interpolation-mode: bicubic; border: none; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none; width: auto;"></a></td>
                    <td width="20" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">&nbsp;</td>
                    <td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="https://www.linkedin.com/company/colonial-life" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;"><img width="25" height="25" src="https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-LinkedIn-icon.png?raw=true" alt="linkedin" style="-ms-interpolation-mode: bicubic; border: none; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none; width: auto;"></a></td>
                </tr></tbody></table>
            
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="20px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 20px; font-weight: normal; line-height: 20px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--products birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">
                    Accident &#9642; Cancer &#9642; Critical Illness &#9642; Dental &#9642; Disability &#9642; Hospital Indemnity &#9642; Life
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="20px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 20px; font-weight: normal; line-height: 20px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal hb-footerUwStatementAndDisclosures birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_footerUwStatementAndDisclosures_birch</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">&copy; birch_year_birch Colonial Life &amp; Accident Insurance Company. All rights reserved. Colonial Life is a registered trademark and marketing brand of Colonial Life &amp; Accident Insurance Company.</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">You are receiving this email at <a name="myname" xt="SPNOTRACK" class="birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: underline;" href="_mailto:%%EMAIL%%">%%EMAIL%%</a>.
                    <a href="#SPONECLICKOPTOUT" id="unsubscribe" name="unsubscribe" class="footer-link-basic birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: underline;">Click here to unsubscribe</a>
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">{{footerTrackingNumber}}</p>
                
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="100px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 100px; font-weight: normal; line-height: 100px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c320s -->`,
        category: 'footer',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: 'white',
            pTextColor: '#2E2E2E',
            footerUwStatementAndDisclosures: 'Insurance products are underwritten by Colonial Life & Accident Insurance Company, Columbia, SC.',
            year: dt.getFullYear()
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: 'white',
            pTextColor: '#2E2E2E',
            footerUwStatementAndDisclosures: 'Insurance products are underwritten by Colonial Life & Accident Insurance Company, Columbia, SC.',
            year: dt.getFullYear()
        }
    } // templateObj_320s
    ,
    templateObj_321: {
        templateDesc: '321',
        templateId: 'templateObj_321',
        baseCode: `<!-- c321 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-util-background-color-colonial-steel-blue" align="center" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="spacer birch-util-background-color-colonial-steel-blue birch--spacer600wide" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="7px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 7px; font-weight: normal; line-height: 7px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top; width: 600px;">&#xA0;</td></tr></tbody></table> 
                    <!-- manually set width of TD holding &#xA0 to 600px -->
                
            </td></tr></table>
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                <p class="birch-text-styles-p--products birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">
                    Accident &#9642; Cancer &#9642; Critical Illness &#9642; Dental &#9642; Disability &#9642; Hospital Indemnity &#9642; Life
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="20px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 20px; font-weight: normal; line-height: 20px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal hb-footerUwStatementAndDisclosures birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_footerUwStatementAndDisclosures_birch</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">&copy; birch_year_birch Colonial Life &amp; Accident Insurance Company. All rights reserved. Colonial Life is a registered trademark and marketing brand of Colonial Life &amp; Accident Insurance Company.</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">You are receiving this email at <a name="myname" xt="SPNOTRACK" class="birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: underline;" href="_mailto:%%EMAIL%%">%%EMAIL%%</a>.
                    <a href="#SPONECLICKOPTOUT" id="unsubscribe" name="unsubscribe" class="footer-link-basic birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: underline;">Click here to unsubscribe</a>
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">{{footerTrackingNumber}}</p>
                
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="100px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 100px; font-weight: normal; line-height: 100px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c321 -->`,
        category: 'footer',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: 'white',
            pTextColor: '#2E2E2E',
            footerUwStatementAndDisclosures: 'Insurance products are underwritten by Colonial Life &amp; Accident Insurance Company, Columbia, SC. Dental plans are underwritten by Colonial Life &amp; Accident Insurance Company, Columbia, SC, and administered by Starmount Life Insurance Company.',
            year: dt.getFullYear()
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: 'white',
            pTextColor: '#2E2E2E',
            footerUwStatementAndDisclosures: 'Insurance products are underwritten by Colonial Life &amp; Accident Insurance Company, Columbia, SC. Dental plans are underwritten by Colonial Life &amp; Accident Insurance Company, Columbia, SC, and administered by Starmount Life Insurance Company.',
            year: dt.getFullYear()
        }
    } // templateObj_321
    ,
    templateObj_321s: {
        templateDesc: '321s',
        templateId: 'templateObj_321s',
        baseCode: `<!-- c321s -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-util-background-color-colonial-steel-blue" align="center" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="spacer birch-util-background-color-colonial-steel-blue birch--spacer600wide" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="7px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 7px; font-weight: normal; line-height: 7px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top; width: 600px;">&#xA0;</td></tr></tbody></table> 
                    <!-- manually set width of TD holding &#xA0 to 600px -->
                
            </td></tr></table>
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="https://twitter.com/ColonialLife" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;"><img width="25" height="25" src="https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-twitter-icon.png?raw=true" alt="twitter" style="-ms-interpolation-mode: bicubic; border: none; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none; width: auto;"></a></td>
                    <td width="20" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">&nbsp;</td>
                    <td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="https://www.facebook.com/coloniallifebenefits/" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;"><img width="25" height="25" src="https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-facebook-icon.png?raw=true" alt="facebook" style="-ms-interpolation-mode: bicubic; border: none; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none; width: auto;"></a></td>
                    <td width="20" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">&nbsp;</td>
                    <td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;"><a href="https://www.linkedin.com/company/colonial-life" style="Margin: 0; color: #2199e8; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: none;"><img width="25" height="25" src="https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-LinkedIn-icon.png?raw=true" alt="linkedin" style="-ms-interpolation-mode: bicubic; border: none; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none; width: auto;"></a></td>
                </tr></tbody></table>
            
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="20px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 20px; font-weight: normal; line-height: 20px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--products birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">
                    Accident &#9642; Cancer &#9642; Critical Illness &#9642; Dental &#9642; Disability &#9642; Hospital Indemnity &#9642; Life 
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="20px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 20px; font-weight: normal; line-height: 20px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="hbid1 birch-text-styles-p--legal hb-footerUwStatementAndDisclosures birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_footerUwStatementAndDisclosures_birch</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="hbid2 birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">&copy; birch_year_birch Colonial Life &amp; Accident Insurance Company. All rights reserved. Colonial Life is a registered trademark and marketing brand of Colonial Life &amp; Accident Insurance Company.</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="hbid3 birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">You are receiving this email at <a name="myname" xt="SPNOTRACK" class="birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: underline;" href="_mailto:%%EMAIL%%">%%EMAIL%%</a>.
                    <a href="#SPONECLICKOPTOUT" id="unsubscribe" name="unsubscribe" class="footer-link-basic birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: underline;">Click here to unsubscribe</a>
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="hbid5 birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">{{footerTrackingNumber}}</p>
                
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="100px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 100px; font-weight: normal; line-height: 100px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c321s -->`,
        category: 'footer',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: 'white',
            pTextColor: '#2E2E2E',
            footerUwStatementAndDisclosures: 'Insurance products are underwritten by Colonial Life &amp; Accident Insurance Company, Columbia, SC. Dental plans are underwritten by Colonial Life &amp; Accident Insurance Company, Columbia, SC, and administered by Starmount Life Insurance Company.',
            year: dt.getFullYear()
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: 'white',
            pTextColor: '#2E2E2E',
            footerUwStatementAndDisclosures: 'Insurance products are underwritten by Colonial Life &amp; Accident Insurance Company, Columbia, SC. Dental plans are underwritten by Colonial Life &amp; Accident Insurance Company, Columbia, SC, and administered by Starmount Life Insurance Company.',
            year: dt.getFullYear()
        }
    } // templateObj_321s
    ,
    templateObj_340: {
        templateDesc: '340',
        templateId: 'templateObj_340',
        baseCode: `<!-- c340 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-util-background-color-colonial-steel-blue" align="center" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="spacer birch-util-background-color-colonial-steel-blue birch--spacer600wide" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="7px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 7px; font-weight: normal; line-height: 7px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top; width: 600px;">&#xA0;</td></tr></tbody></table> 
                    <!-- manually set width of TD holding &#xA0 to 600px -->
                
            </td></tr></table>
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                <p class="birch-text-styles-p--products birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">
                    Accident &#9642; Dental &#9642; Disability &#9642; Life &#9642; Specified Disease
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="20px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 20px; font-weight: normal; line-height: 20px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal hb-footerUwStatementAndDisclosures birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_footerUwStatementAndDisclosures_birch</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">&copy; birch_year_birch The Paul Revere Life Insurance Company. All rights reserved. Colonial Voluntary Benefits is a trademark and marketing brand of The Paul Revere Life Insurance Company.</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">You are receiving this email at <a name="myname" xt="SPNOTRACK" class="birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: underline;" href="_mailto:%%EMAIL%%">%%EMAIL%%</a>.
                    <a href="#SPONECLICKOPTOUT" id="unsubscribe" name="unsubscribe" class="footer-link-basic birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: underline;">Click here to unsubscribe</a>
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">{{footerTrackingNumber}}</p>
                
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="100px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 100px; font-weight: normal; line-height: 100px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c340 -->`,
        category: 'footer',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: 'white',
            pTextColor: '#2E2E2E',
            footerUwStatementAndDisclosures: 'Underwritten by The Paul Revere Life Insurance Company, Worcester, MA, and administered by Colonial Life &amp; Accident Insurance Company.',
            year: dt.getFullYear()
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: 'white',
            pTextColor: '#2E2E2E',
            footerUwStatementAndDisclosures: 'Underwritten by The Paul Revere Life Insurance Company, Worcester, MA, and administered by Colonial Life &amp; Accident Insurance Company.',
            year: dt.getFullYear()
        }
    } // templateObj_340
    ,
    templateObj_341: {
        templateDesc: '341',
        templateId: 'templateObj_341',
        baseCode: `<!-- c341 -->
        <table align="center" class="container" style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding: 0; text-align: inherit; vertical-align: top; width: 600px;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
            <table class="wrapper birch-util-background-color-colonial-steel-blue" align="center" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top;">
                <table class="spacer birch-util-background-color-colonial-steel-blue birch--spacer600wide" style="background-color: #19557F; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="7px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 7px; font-weight: normal; line-height: 7px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top; width: 600px;">&#xA0;</td></tr></tbody></table> 
                    <!-- manually set width of TD holding &#xA0 to 600px -->
                
            </td></tr></table>
            <table class="wrapper birch-wrapper-padding birch--backgroundColor" align="center" style="background-color: birch_backgroundColor_birch; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><td class="wrapper-inner" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; padding-left: 53px; padding-right: 53px; text-align: left; vertical-align: top;">
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="50px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 50px; font-weight: normal; line-height: 50px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
                <p class="birch-text-styles-p--products birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 12px; font-style: normal; font-weight: 400; line-height: normal; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">
                    Accident &#9642; Dental &#9642; Disability &#9642; Life &#9642; Specified Disease
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="20px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 20px; font-weight: normal; line-height: 20px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="hbid1 birch-text-styles-p--legal hb-footerUwStatementAndDisclosures birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">birch_footerUwStatementAndDisclosures_birch</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="hbid2 birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">&copy; birch_year_birch The Paul Revere Life Insurance Company. All rights reserved. Colonial Voluntary Benefits is a trademark and marketing brand of The Paul Revere Life Insurance Company.</p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="hbid3 birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">You are receiving this email at <a name="myname" xt="SPNOTRACK" class="birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: underline;" href="_mailto:%%EMAIL%%">%%EMAIL%%</a>.
                    <a href="#SPONECLICKOPTOUT" id="unsubscribe" name="unsubscribe" class="footer-link-basic birch--pTextColor" style="Margin: 0; color: birch_pTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; text-decoration: underline;">Click here to unsubscribe</a>
                </p>
        
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="5px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 5px; font-weight: normal; line-height: 5px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
        
                <p class="hbid5 birch-text-styles-p--legal birch--pTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_pTextColor_birch; font-family: Arial; font-size: 11px; font-style: normal; font-weight: 400; line-height: 14px; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">{{footerTrackingNumber}}</p>
                
                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;"><td height="100px" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 100px; font-weight: normal; line-height: 100px; margin: 0; mso-line-height-rule: exactly; padding: 0; text-align: left; vertical-align: top;">&#xA0;</td></tr></tbody></table> 
            </td></tr></table>
        </td></tr></tbody></table>
        <!-- /c341 -->`,
        category: 'footer',
        defaultUnumDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: 'white',
            pTextColor: '#2E2E2E',
            footerUwStatementAndDisclosures: 'Underwritten by The Paul Revere Life Insurance Company, Worcester, MA, and administered by Colonial Life &amp; Accident Insurance Company. Dental plans are underwritten by The Paul Revere Life Insurance Company, Worcester, MA, and administered by Starmount Life Insurance Company.',
            year: dt.getFullYear()
        },
        defaultColonialDataObj: { // matches templateValuesObj on the data instance obj
            backgroundColor: 'white',
            pTextColor: '#2E2E2E',
            footerUwStatementAndDisclosures: 'Underwritten by The Paul Revere Life Insurance Company, Worcester, MA, and administered by Colonial Life &amp; Accident Insurance Company. Dental plans are underwritten by The Paul Revere Life Insurance Company, Worcester, MA, and administered by Starmount Life Insurance Company.',
            year: dt.getFullYear()
        }
    } // templateObj_341

}// megaTemplateObj



// these arrays will hold the templateId based on the tags property
// these predetermined tags allow faster filtering so when the user clicks on
// a filter button, the code doesn't have to loop or do DOM work.
// So making a new component work with filtering means simply adding the right tags to the obj
// currently these are all possible tag values:
// tags: ['1col', '2col', 'alignedLeft', 'alignedCenter']
let compCategory1col = []
let compCategory2col = []
let compCategoryAlignedLeft = []
let compCategoryAlignedCenter = []

// loop through megaTemplateObj
const megaTemplateArray = Object.entries(megaTemplateObj)
megaTemplateArray.map( (item, i) => {
    // each item is an array: [0]='templateObj_X' [1]={}
    if(typeof item[1].tags !== "undefined"){
        if (item[1].tags.includes('1col')){ compCategory1col.push(item[0]) }
        if (item[1].tags.includes('2col')){ compCategory2col.push(item[0]) }
        if (item[1].tags.includes('alignedLeft')){ compCategoryAlignedLeft.push(item[0]) }
        if (item[1].tags.includes('alignedCenter')){ compCategoryAlignedCenter.push(item[0]) }
    }
})

// #endregion TEMPLATE REPEAT AREA


// these variables are populated during the themeChange() initialization
// they are used by the filter buttons to avoid needing to recalculate during run-time
let bannerArrayAll = [];
let bannerArrayCol1 = []
let bannerArrayCol2 = []
let bannerArrayAlignLeft = []
let bannerArrayAlignCenter = []

let bodyArrayAll = [];
let bodyArrayCol1 = []
let bodyArrayCol2 = []
let bodyArrayAlignLeft = []
let bodyArrayAlignCenter = []


// this is the primary object for the entire program
const main = {
    idCount: 0, // increments with each created component and used to assign each a unique id.
    comps: [],  // an array of the components which are in use.
    addComp: function(templateString) { // add a component to the email  
        let template = eval('megaTemplateObj.'+templateString)

        //console.log('adding a new component to the data model with the following template...')
        //console.log(template)
        
        let theme = 'unum'; // default value
        let themeChoiceEl = document.querySelector('#t10_EmailThemeDD');
        if (themeChoiceEl != null){
            theme = themeChoiceEl.value.toLowerCase()
        }
        let themedTemplateValuesObj = template.defaultUnumDataObj
        if (theme == 'colonial'){
            themedTemplateValuesObj = template.defaultColonialDataObj
        }

        

        this.comps.push({
            id: this.idCount,
            template: template,
            selected: false, 
            // this copies the template object instead of referring back to it (and thus changing the template's obj)
            templateValuesObj: Object.assign({}, themedTemplateValuesObj)
        });
        this.idCount++;
        view.displayComponents();

        // try to select the newest added comp
        handlers.selectCompWhenAddingToEmail(this.idCount-1);

        // now scroll to the bottom where the latest component was added:
        $('#emailComponentsArea').scrollTop($('#emailComponentsArea')[0].scrollHeight);

        //console.log(main.comps)
        
    },
    goUp2: function(evt, compId){  // move a component up a position in the email
        //console.log('entering goUp2 method...')
        let currentCompPosition = getPositionOfComp(compId);
        if ( currentCompPosition > 0 ){
            array_move(this.comps, currentCompPosition, currentCompPosition-1)
            view.displayComponents();
        }
        evt.stopPropagation(); // this prevents frame button clicks from triggering clickCompInEmail() also.
    },
    goDown2: function(evt, compId){ // move a component down a position in the email
        //console.log('entering goDown2 method...')
        let currentCompPosition = getPositionOfComp(compId);
        if ( currentCompPosition < main.comps.length-1){
            array_move(main.comps, currentCompPosition, (currentCompPosition*1+1))
            view.displayComponents();
        }
        evt.stopPropagation(); // this prevents frame button clicks from triggering clickCompInEmail() also.
    },
    goDelete2: function(evt, compId){ // delete a component from the current email
        //console.log('entering goDelete2 method...')
        let currentCompPosition = getPositionOfComp(compId);
        var result = confirm("About to delete. Are you sure?");
        if (result) {
            this.comps.splice(currentCompPosition,1)
            view.displayComponents()
        }
        evt.stopPropagation(); // this prevents frame button clicks from triggering clickCompInEmail() also.
        document.querySelector('#compnav1').click() // switch to choose component layout
    },
    goUnselect: function(){ // called from html attached event
        //console.log('welcome to the goUnselect method...')
        // unselect all email components
        for (let i = 0; i < main.comps.length; ++i) {
            main.comps[i].selected = false;
        }
        view.displayComponents()
        document.querySelector('#compnav1').click() // switch to choose component layout
    },
    goEdit: function(compId, el, evt){ // enter edit mode for a component in the email
        //console.log('entering goEdit method...')
        compnav2.click();

        // console.log('received compId: ', compId)
         //console.log('received el: ', el) // parent el with content + controls
        // console.log('content is ', el.querySelector('.content'))
        //let content = el.querySelector('.content')
        //console.log(content)

        const receivedTemplateId = el.dataset.templateid
        //console.log('receivedTemplateId: ', receivedTemplateId)

        let matchingDataComp = getCompWithMatchingId(compId)
        //console.log('matchingDataComp is ', matchingDataComp)

        // hide all other control groups
        let allControlGroups = document.querySelectorAll('.components-panel2 .templateControlGroup')
        for (let i = 0; i < allControlGroups.length; ++i) {
            allControlGroups[i].classList.add('hideme')
        }

        // display controls for that template in the edit pane
        let controlGroupSelector = '#'+receivedTemplateId+'_controls'
        let controlGroup = document.querySelector(controlGroupSelector)
        controlGroup.classList.remove('hideme')

        document.querySelector('#editCompNameLabel').innerHTML = matchingDataComp.template.templateDesc
        document.querySelector('#shared_copyCodeBtn').classList.remove('hideme')



        // #region TEMPLATE REPEAT AREA
        if (receivedTemplateId == 'templateObj_90'){
            document.querySelector('#t90_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t90_linkColor').value = matchingDataComp.templateValuesObj.linkColor
            document.querySelector('#t90_linkUrl').value = matchingDataComp.templateValuesObj.linkUrl
            document.querySelector('#t90_linkText').value = matchingDataComp.templateValuesObj.linkText
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_100'){
            document.querySelector('#t100_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t100_logoUrl').value = matchingDataComp.templateValuesObj.logoUrl
            document.querySelector('#t100_logoSrc').value = matchingDataComp.templateValuesObj.logoSrc
            document.querySelector('#t100_logoAltText').value = matchingDataComp.templateValuesObj.logoAltText
            document.querySelector('#t100_logoAltTextColor').value = matchingDataComp.templateValuesObj.logoAltTextColor
            document.querySelector('#t100_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t100_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t100_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_101'){
            document.querySelector('#t101_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t101_logoUrl').value = matchingDataComp.templateValuesObj.logoUrl
            document.querySelector('#t101_logoSrc').value = matchingDataComp.templateValuesObj.logoSrc
            document.querySelector('#t101_logoAltText').value = matchingDataComp.templateValuesObj.logoAltText
            document.querySelector('#t101_logoAltTextColor').value = matchingDataComp.templateValuesObj.logoAltTextColor
            document.querySelector('#t101_headerbarColor').value = matchingDataComp.templateValuesObj.headerbarColor
            document.querySelector('#t101_descText').value = matchingDataComp.templateValuesObj.descText
            document.querySelector('#t101_descTextColor').value = matchingDataComp.templateValuesObj.descTextColor
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_102'){
            document.querySelector('#t102_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t102_logoUrl').value = matchingDataComp.templateValuesObj.logoUrl
            document.querySelector('#t102_logoSrc').value = matchingDataComp.templateValuesObj.logoSrc
            document.querySelector('#t102_logoAltText').value = matchingDataComp.templateValuesObj.logoAltText
            document.querySelector('#t102_logoAltTextColor').value = matchingDataComp.templateValuesObj.logoAltTextColor
            document.querySelector('#t102_headerbarColor').value = matchingDataComp.templateValuesObj.headerbarColor
            document.querySelector('#t102_descText').value = matchingDataComp.templateValuesObj.descText
            document.querySelector('#t102_descTextColor').value = matchingDataComp.templateValuesObj.descTextColor
            document.querySelector('#t102_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t102_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t102_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_103'){
            document.querySelector('#t103_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t103_logoUrl').value = matchingDataComp.templateValuesObj.logoUrl
            document.querySelector('#t103_logoSrc').value = matchingDataComp.templateValuesObj.logoSrc
            document.querySelector('#t103_logoAltText').value = matchingDataComp.templateValuesObj.logoAltText
            document.querySelector('#t103_logoAltTextColor').value = matchingDataComp.templateValuesObj.logoAltTextColor
            document.querySelector('#t103_headerbarColor').value = matchingDataComp.templateValuesObj.headerbarColor
            document.querySelector('#t103_descText').value = matchingDataComp.templateValuesObj.descText
            document.querySelector('#t103_descTextColor').value = matchingDataComp.templateValuesObj.descTextColor
            document.querySelector('#t103_dateTextColor').value = matchingDataComp.templateValuesObj.dateTextColor
            document.querySelector('#t103_dateText').value = matchingDataComp.templateValuesObj.dateText
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_104'){
            document.querySelector('#t104_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t104_logoUrl').value = matchingDataComp.templateValuesObj.logoUrl
            document.querySelector('#t104_logoSrc').value = matchingDataComp.templateValuesObj.logoSrc
            document.querySelector('#t104_logoAltText').value = matchingDataComp.templateValuesObj.logoAltText
            document.querySelector('#t104_logoAltTextColor').value = matchingDataComp.templateValuesObj.logoAltTextColor
            document.querySelector('#t104_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t104_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t104_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            // mergeCodeWithDataForEdit('#t104_mergedCode')
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_150'){
            document.querySelector('#t150_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t150_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t150_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_150b'){
            document.querySelector('#t150b_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t150b_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t150b_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_151'){
            document.querySelector('#t151_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t151_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t151_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            document.querySelector('#t151_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t151_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t151_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t151_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_152'){
            document.querySelector('#t152_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t152_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t152_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            document.querySelector('#t152_pText').value = matchingDataComp.templateValuesObj.pText
            document.querySelector('#t152_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_153'){
            document.querySelector('#t153_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t153_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t153_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            document.querySelector('#t153_pText').value = matchingDataComp.templateValuesObj.pText
            document.querySelector('#t153_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t153_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t153_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t153_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t153_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_154'){
            document.querySelector('#t154_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t154_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t154_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            document.querySelector('#t154_iconUrl').value = matchingDataComp.templateValuesObj.iconUrl
            document.querySelector('#t154_iconAltText').value = matchingDataComp.templateValuesObj.iconAltText
            document.querySelector('#t154_iconAltTextColor').value = matchingDataComp.templateValuesObj.iconAltTextColor
            //document.querySelector('#t154_iconDD').value = matchingDataComp.templateValuesObj.iconUrl
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_155'){
            document.querySelector('#t155_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t155_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t155_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_156'){
            document.querySelector('#t156_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t156_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t156_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t156_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t156_backgroundColor2').value = matchingDataComp.templateValuesObj.backgroundColor2
            document.querySelector('#t156_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t156_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_157'){
            document.querySelector('#t157_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t157_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t157_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t157_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t157_backgroundColor2').value = matchingDataComp.templateValuesObj.backgroundColor2
            document.querySelector('#t157_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t157_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            document.querySelector('#t157_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t157_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t157_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t157_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_157b'){
            document.querySelector('#t157b_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t157b_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t157b_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t157b_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t157b_backgroundColor2').value = matchingDataComp.templateValuesObj.backgroundColor2
            document.querySelector('#t157b_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t157b_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            document.querySelector('#t157b_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t157b_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t157b_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t157b_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_158'){
            document.querySelector('#t158_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t158_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t158_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t158_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t158_iconUrl').value = matchingDataComp.templateValuesObj.iconUrl
            document.querySelector('#t158_iconAltText').value = matchingDataComp.templateValuesObj.iconAltText
            document.querySelector('#t158_iconAltTextColor').value = matchingDataComp.templateValuesObj.iconAltTextColor
            document.querySelector('#t158_backgroundColor2').value = matchingDataComp.templateValuesObj.backgroundColor2
            document.querySelector('#t158_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t158_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_160'){
            document.querySelector('#t160_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t160_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t160_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t160_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t160_backgroundColor2').value = matchingDataComp.templateValuesObj.backgroundColor2
            document.querySelector('#t160_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t160_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_161'){
            document.querySelector('#t161_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t161_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t161_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t161_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t161_backgroundColor2').value = matchingDataComp.templateValuesObj.backgroundColor2
            document.querySelector('#t161_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t161_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            document.querySelector('#t161_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t161_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t161_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t161_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_161b'){
            document.querySelector('#t161b_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t161b_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t161b_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t161b_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t161b_backgroundColor2').value = matchingDataComp.templateValuesObj.backgroundColor2
            document.querySelector('#t161b_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t161b_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            document.querySelector('#t161b_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t161b_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t161b_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t161b_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_162'){
            document.querySelector('#t162_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t162_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t162_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t162_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t162_iconUrl').value = matchingDataComp.templateValuesObj.iconUrl
            document.querySelector('#t162_iconAltText').value = matchingDataComp.templateValuesObj.iconAltText
            document.querySelector('#t162_iconAltTextColor').value = matchingDataComp.templateValuesObj.iconAltTextColor
            document.querySelector('#t162_backgroundColor2').value = matchingDataComp.templateValuesObj.backgroundColor2
            document.querySelector('#t162_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t162_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_163'){
            document.querySelector('#t163_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_200'){
            document.querySelector('#t200_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t200_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t200_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t200_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            document.querySelector('#t200_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t200_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t200_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t200_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            document.querySelector('#t200_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_201'){
            document.querySelector('#t201_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t201_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t201_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t201_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            document.querySelector('#t201_pText').value = matchingDataComp.templateValuesObj.pText
            document.querySelector('#t201_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t201_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t201_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t201_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t201_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            document.querySelector('#t201_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_201c'){
            document.querySelector('#t201c_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t201c_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t201c_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t201c_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            document.querySelector('#t201c_pText').value = matchingDataComp.templateValuesObj.pText
            document.querySelector('#t201c_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t201c_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_202'){
            document.querySelector('#t202_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t202_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t202_h2TextColor').value = matchingDataComp.templateValuesObj.h2TextColor
            document.querySelector('#t202_h2Text').value = matchingDataComp.templateValuesObj.h2Text
            document.querySelector('#t202_pText').value = matchingDataComp.templateValuesObj.pText
            document.querySelector('#t202_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t202_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t202_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t202_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t202_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            document.querySelector('#t202_linkUrl').value = matchingDataComp.templateValuesObj.linkUrl
            document.querySelector('#t202_linkColor').value = matchingDataComp.templateValuesObj.linkColor
            document.querySelector('#t202_linkText').value = matchingDataComp.templateValuesObj.linkText
            document.querySelector('#t202_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_203'){
            document.querySelector('#t203_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t203_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t203_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t203_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            document.querySelector('#t203_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t203_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t203_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t203_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            document.querySelector('#t203_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_204'){
            document.querySelector('#t204_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t204_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t204_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t204_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            document.querySelector('#t204_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t204_pText').value = matchingDataComp.templateValuesObj.pText
            document.querySelector('#t204_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t204_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t204_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t204_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            document.querySelector('#t204_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_204e'){
            document.querySelector('#t204e_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t204e_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t204e_iconUrl').value = matchingDataComp.templateValuesObj.iconUrl
            document.querySelector('#t204e_iconAltText').value = matchingDataComp.templateValuesObj.iconAltText
            document.querySelector('#t204e_iconAltTextColor').value = matchingDataComp.templateValuesObj.iconAltTextColor
            document.querySelector('#t204e_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t204e_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            document.querySelector('#t204e_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t204e_pText').value = matchingDataComp.templateValuesObj.pText
            document.querySelector('#t204e_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t204e_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t204e_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t204e_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            document.querySelector('#t204e_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_204i'){
            document.querySelector('#t204i_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t204i_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t204i_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t204i_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t204i_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t204i_h1TextColor').value = matchingDataComp.templateValuesObj.h1TextColor
            document.querySelector('#t204i_h1Text').value = matchingDataComp.templateValuesObj.h1Text
            document.querySelector('#t204i_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t204i_pText').value = matchingDataComp.templateValuesObj.pText
            document.querySelector('#t204i_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t204i_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t204i_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t204i_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            document.querySelector('#t204i_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_205'){
            document.querySelector('#t205_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t205_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t205_h2TextColor').value = matchingDataComp.templateValuesObj.h2TextColor
            document.querySelector('#t205_h2Text').value = matchingDataComp.templateValuesObj.h2Text
            document.querySelector('#t205_bulletTextColor').value = matchingDataComp.templateValuesObj.bulletTextColor
            // document.querySelector('#t205_listItemsAsString').value = matchingDataComp.templateValuesObj.listItemsAsString
            document.querySelector('#t205_listItemsAsString').value = prepForTextArea(matchingDataComp.templateValuesObj.listItemsAsString)
            document.querySelector('#t205_ulStyle').value = matchingDataComp.templateValuesObj.ulStyle
            document.querySelector('#t205_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_205e'){
            document.querySelector('#t205e_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t205e_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t205e_h2TextColor').value = matchingDataComp.templateValuesObj.h2TextColor

            document.querySelector('#t205e_bulletImageList').value = prepForTextArea(matchingDataComp.templateValuesObj.bulletImageList)
            //document.querySelector('#t205e_bulletImageList').value = matchingDataComp.templateValuesObj.bulletImageList
            document.querySelector('#t205e_bulletTextList').value = prepForTextArea(matchingDataComp.templateValuesObj.bulletTextList)

            document.querySelector('#t205e_h2Text').value = matchingDataComp.templateValuesObj.h2Text
            document.querySelector('#t205e_bulletTextColor').value = matchingDataComp.templateValuesObj.bulletTextColor
            document.querySelector('#t205e_bulletImage').value = matchingDataComp.templateValuesObj.bulletImage
            //document.querySelector('#t205e_bulletImage').value = matchingDataComp.templateValuesObj.bulletImage2
            //document.querySelector('#t205e_bulletImage').value = matchingDataComp.templateValuesObj.bulletImage3
            document.querySelector('#t205e_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t205e_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t205e_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t205e_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            document.querySelector('#t205e_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_206'){
            document.querySelector('#t206_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t206_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t206_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t206_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t206_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t206_h2TextColor').value = matchingDataComp.templateValuesObj.h2TextColor
            document.querySelector('#t206_h2Text').value = matchingDataComp.templateValuesObj.h2Text
            document.querySelector('#t206_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t206_pText').value = matchingDataComp.templateValuesObj.pText
            document.querySelector('#t206_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_207'){
            document.querySelector('#t207_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t207_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t207_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t207_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t207_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t207_h2TextColor').value = matchingDataComp.templateValuesObj.h2TextColor
            document.querySelector('#t207_h2Text').value = matchingDataComp.templateValuesObj.h2Text
            document.querySelector('#t207_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t207_pText').value = matchingDataComp.templateValuesObj.pText
            document.querySelector('#t207_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t207_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t207_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t207_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            document.querySelector('#t207_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_207b'){
            document.querySelector('#t207b_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t207b_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t207b_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t207b_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t207b_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t207b_h2TextColor').value = matchingDataComp.templateValuesObj.h2TextColor
            document.querySelector('#t207b_h2Text').value = matchingDataComp.templateValuesObj.h2Text
            document.querySelector('#t207b_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t207b_pText').value = matchingDataComp.templateValuesObj.pText
            document.querySelector('#t207b_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t207b_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t207b_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t207b_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            document.querySelector('#t207b_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_208'){
            document.querySelector('#t208_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t208_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t208_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t208_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t208_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t208_h2TextColor').value = matchingDataComp.templateValuesObj.h2TextColor
            document.querySelector('#t208_h2Text').value = matchingDataComp.templateValuesObj.h2Text
            document.querySelector('#t208_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t208_pText').value = matchingDataComp.templateValuesObj.pText
            document.querySelector('#t208_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_208b'){
            document.querySelector('#t208b_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t208b_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t208b_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t208b_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t208b_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t208b_h2TextColor').value = matchingDataComp.templateValuesObj.h2TextColor
            document.querySelector('#t208b_h2Text').value = matchingDataComp.templateValuesObj.h2Text
            document.querySelector('#t208b_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t208b_pText').value = matchingDataComp.templateValuesObj.pText
            document.querySelector('#t208b_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_209'){
            document.querySelector('#t209_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t209_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t209_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t209_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t209_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t209_h2TextColor').value = matchingDataComp.templateValuesObj.h2TextColor
            document.querySelector('#t209_h2Text').value = matchingDataComp.templateValuesObj.h2Text
            document.querySelector('#t209_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t209_pText').value = matchingDataComp.templateValuesObj.pText
            document.querySelector('#t209_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t209_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t209_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t209_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            document.querySelector('#t209_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_210'){
            document.querySelector('#t210_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t210_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t210_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t210_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t210_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t210_iconUrl').value = matchingDataComp.templateValuesObj.iconUrl
            document.querySelector('#t210_iconAltText').value = matchingDataComp.templateValuesObj.iconAltText
            document.querySelector('#t210_iconAltTextColor').value = matchingDataComp.templateValuesObj.iconAltTextColor
            document.querySelector('#t210_h2TextColor').value = matchingDataComp.templateValuesObj.h2TextColor
            document.querySelector('#t210_h2Text').value = matchingDataComp.templateValuesObj.h2Text
            document.querySelector('#t210_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_211'){
            document.querySelector('#t211_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t211_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t211_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t211_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t211_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t211_iconUrl').value = matchingDataComp.templateValuesObj.iconUrl
            document.querySelector('#t211_iconAltText').value = matchingDataComp.templateValuesObj.iconAltText
            document.querySelector('#t211_iconAltTextColor').value = matchingDataComp.templateValuesObj.iconAltTextColor
            document.querySelector('#t211_h2TextColor').value = matchingDataComp.templateValuesObj.h2TextColor
            document.querySelector('#t211_h2Text').value = matchingDataComp.templateValuesObj.h2Text
            document.querySelector('#t211_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t211_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t211_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t211_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            document.querySelector('#t211_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_212'){
            document.querySelector('#t212_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t212_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t212_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t212_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t212_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t212_iconUrl').value = matchingDataComp.templateValuesObj.iconUrl
            document.querySelector('#t212_iconAltText').value = matchingDataComp.templateValuesObj.iconAltText
            document.querySelector('#t212_iconAltTextColor').value = matchingDataComp.templateValuesObj.iconAltTextColor
            document.querySelector('#t212_h2TextColor').value = matchingDataComp.templateValuesObj.h2TextColor
            document.querySelector('#t212_h2Text').value = matchingDataComp.templateValuesObj.h2Text
            document.querySelector('#t212_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t212_pText').value = matchingDataComp.templateValuesObj.pText
            document.querySelector('#t212_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_213'){
            document.querySelector('#t213_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t213_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t213_h2TextColor').value = matchingDataComp.templateValuesObj.h2TextColor
            document.querySelector('#t213_h2Text1').value = matchingDataComp.templateValuesObj.h2Text1
            document.querySelector('#t213_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t213_pText1').value = matchingDataComp.templateValuesObj.pText1
            //document.querySelector('#t213_h2TextColor2').value = matchingDataComp.templateValuesObj.h2TextColor2
            document.querySelector('#t213_h2Text2').value = matchingDataComp.templateValuesObj.h2Text2
            //document.querySelector('#t213_pTextColor2').value = matchingDataComp.templateValuesObj.pTextColor2
            document.querySelector('#t213_pText2').value = matchingDataComp.templateValuesObj.pText2
            document.querySelector('#t213_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_214'){
            document.querySelector('#t214_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t214_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t214_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t214_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t214_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t214_h2TextColor').value = matchingDataComp.templateValuesObj.h2TextColor
            document.querySelector('#t214_h2Text').value = matchingDataComp.templateValuesObj.h2Text
            document.querySelector('#t214_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t214_pText').value = matchingDataComp.templateValuesObj.pText
            document.querySelector('#t214_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_215'){
            document.querySelector('#t215_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t215_imgUrl1').value = matchingDataComp.templateValuesObj.imgUrl1
            document.querySelector('#t215_imgAltText1').value = matchingDataComp.templateValuesObj.imgAltText1
            document.querySelector('#t215_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t215_h2TextColor').value = matchingDataComp.templateValuesObj.h2TextColor
            document.querySelector('#t215_h2Text1').value = matchingDataComp.templateValuesObj.h2Text1
            document.querySelector('#t215_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t215_pText1').value = matchingDataComp.templateValuesObj.pText1
            document.querySelector('#t215_imgUrl2').value = matchingDataComp.templateValuesObj.imgUrl2
            document.querySelector('#t215_imgAltText2').value = matchingDataComp.templateValuesObj.imgAltText2
            //document.querySelector('#t215_imgAltText2Color').value = matchingDataComp.templateValuesObj.imgAltText2Color
            //document.querySelector('#t215_h2TextColor2').value = matchingDataComp.templateValuesObj.h2TextColor2
            document.querySelector('#t215_h2Text2').value = matchingDataComp.templateValuesObj.h2Text2
            //document.querySelector('#t215_pTextColor2').value = matchingDataComp.templateValuesObj.pTextColor2
            document.querySelector('#t215_pText2').value = matchingDataComp.templateValuesObj.pText2
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_216'){
            document.querySelector('#t216_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t216_spacerTop').value = matchingDataComp.templateValuesObj.spacerTop
            document.querySelector('#t216_imgUrl').value = matchingDataComp.templateValuesObj.imgUrl
            document.querySelector('#t216_imgAltText').value = matchingDataComp.templateValuesObj.imgAltText
            document.querySelector('#t216_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t216_h2TextColor').value = matchingDataComp.templateValuesObj.h2TextColor
            document.querySelector('#t216_h2Text').value = matchingDataComp.templateValuesObj.h2Text
            document.querySelector('#t216_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t216_pText').value = matchingDataComp.templateValuesObj.pText
            document.querySelector('#t216_ctaBackgroundColor').value = matchingDataComp.templateValuesObj.ctaBackgroundColor
            document.querySelector('#t216_ctaUrl').value = matchingDataComp.templateValuesObj.ctaUrl
            document.querySelector('#t216_ctaTextColor').value = matchingDataComp.templateValuesObj.ctaTextColor
            document.querySelector('#t216_ctaText').value = matchingDataComp.templateValuesObj.ctaText
            document.querySelector('#t216_spacerBottom').value = matchingDataComp.templateValuesObj.spacerBottom
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_217'){
            document.querySelector('#t217_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t217_imgUrl1').value = matchingDataComp.templateValuesObj.imgUrl1
            document.querySelector('#t217_imgAltText1').value = matchingDataComp.templateValuesObj.imgAltText1
            document.querySelector('#t217_imgAltTextColor').value = matchingDataComp.templateValuesObj.imgAltTextColor
            document.querySelector('#t217_h2TextColor').value = matchingDataComp.templateValuesObj.h2TextColor
            document.querySelector('#t217_h2Text1').value = matchingDataComp.templateValuesObj.h2Text1
            document.querySelector('#t217_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t217_pText1').value = matchingDataComp.templateValuesObj.pText1
            document.querySelector('#t217_ctaBackgroundColor1').value = matchingDataComp.templateValuesObj.ctaBackgroundColor1
            document.querySelector('#t217_ctaUrl1').value = matchingDataComp.templateValuesObj.ctaUrl1
            document.querySelector('#t217_ctaTextColor1').value = matchingDataComp.templateValuesObj.ctaTextColor1
            document.querySelector('#t217_ctaText1').value = matchingDataComp.templateValuesObj.ctaText1
            document.querySelector('#t217_imgUrl2').value = matchingDataComp.templateValuesObj.imgUrl2
            document.querySelector('#t217_imgAltText2').value = matchingDataComp.templateValuesObj.imgAltText2
            //document.querySelector('#t217_imgAltText2Color').value = matchingDataComp.templateValuesObj.imgAltText2Color
            //document.querySelector('#t217_h2TextColor2').value = matchingDataComp.templateValuesObj.h2TextColor2
            document.querySelector('#t217_h2Text2').value = matchingDataComp.templateValuesObj.h2Text2
            //document.querySelector('#t217_pTextColor2').value = matchingDataComp.templateValuesObj.pTextColor2
            document.querySelector('#t217_pText2').value = matchingDataComp.templateValuesObj.pText2
            document.querySelector('#t217_ctaBackgroundColor2').value = matchingDataComp.templateValuesObj.ctaBackgroundColor2
            document.querySelector('#t217_ctaUrl2').value = matchingDataComp.templateValuesObj.ctaUrl2
            document.querySelector('#t217_ctaTextColor2').value = matchingDataComp.templateValuesObj.ctaTextColor2
            document.querySelector('#t217_ctaText2').value = matchingDataComp.templateValuesObj.ctaText2
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_300'){
            document.querySelector('#t300_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t300_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t300_footerUwStatementAndDisclosures').value = matchingDataComp.templateValuesObj.footerUwStatementAndDisclosures
            document.querySelector('#t300_year').value = matchingDataComp.templateValuesObj.year
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_301'){
            document.querySelector('#t301_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t301_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t301_emailLinkUrl').value = matchingDataComp.templateValuesObj.emailLinkUrl
            document.querySelector('#t301_emailLinkText').value = matchingDataComp.templateValuesObj.emailLinkText
            document.querySelector('#t301_loginLinkUrl').value = matchingDataComp.templateValuesObj.loginLinkUrl
            document.querySelector('#t301_loginLinkText').value = matchingDataComp.templateValuesObj.loginLinkText
            document.querySelector('#t301_callLinkUrl').value = matchingDataComp.templateValuesObj.callLinkUrl
            document.querySelector('#t301_callLinkText').value = matchingDataComp.templateValuesObj.callLinkText
            document.querySelector('#t301_footerUwStatementAndDisclosures').value = matchingDataComp.templateValuesObj.footerUwStatementAndDisclosures
            document.querySelector('#t301_year').value = matchingDataComp.templateValuesObj.year
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_302'){
            document.querySelector('#t302_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t302_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t302_footerUwStatementAndDisclosures').value = matchingDataComp.templateValuesObj.footerUwStatementAndDisclosures
            document.querySelector('#t302_year').value = matchingDataComp.templateValuesObj.year
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_302s'){
            document.querySelector('#t302s_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t302s_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t302s_footerUwStatementAndDisclosures').value = matchingDataComp.templateValuesObj.footerUwStatementAndDisclosures
            document.querySelector('#t302s_year').value = matchingDataComp.templateValuesObj.year
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_320'){
            document.querySelector('#t320_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t320_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t320_footerUwStatementAndDisclosures').value = matchingDataComp.templateValuesObj.footerUwStatementAndDisclosures
            document.querySelector('#t320_year').value = matchingDataComp.templateValuesObj.year
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_320s'){
            document.querySelector('#t320s_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t320s_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t320s_footerUwStatementAndDisclosures').value = matchingDataComp.templateValuesObj.footerUwStatementAndDisclosures
            document.querySelector('#t320s_year').value = matchingDataComp.templateValuesObj.year
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_321'){
            document.querySelector('#t321_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t321_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t321_footerUwStatementAndDisclosures').value = matchingDataComp.templateValuesObj.footerUwStatementAndDisclosures
            document.querySelector('#t321_year').value = matchingDataComp.templateValuesObj.year
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_321s'){
            document.querySelector('#t321s_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t321s_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t321s_footerUwStatementAndDisclosures').value = matchingDataComp.templateValuesObj.footerUwStatementAndDisclosures
            document.querySelector('#t321s_year').value = matchingDataComp.templateValuesObj.year
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_340'){
            document.querySelector('#t340_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t340_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t340_footerUwStatementAndDisclosures').value = matchingDataComp.templateValuesObj.footerUwStatementAndDisclosures
            document.querySelector('#t340_year').value = matchingDataComp.templateValuesObj.year
            mergeCodeWithDataForEditShared()
        }

        if (receivedTemplateId == 'templateObj_341'){
            document.querySelector('#t341_backgroundColor').value = matchingDataComp.templateValuesObj.backgroundColor
            document.querySelector('#t341_pTextColor').value = matchingDataComp.templateValuesObj.pTextColor
            document.querySelector('#t341_footerUwStatementAndDisclosures').value = matchingDataComp.templateValuesObj.footerUwStatementAndDisclosures
            document.querySelector('#t341_year').value = matchingDataComp.templateValuesObj.year
            mergeCodeWithDataForEditShared()
        }
        // #endregion TEMPLATE REPEAT AREA 

        

        

          
        
        

        // initialize all color picker boxes with the color of their paired input
        allColorPickerButtons = document.querySelectorAll('.cpTooltip')
        for (let i=0; i<allColorPickerButtons.length; i++){
            // get element (input) which matches value of the colorPicker button
            let tempInputEl = document.querySelector('#'+allColorPickerButtons[i].value)
            // set the button's color to the color of the input
            allColorPickerButtons[i].style.backgroundColor = tempInputEl.value
        }

        if (evt !== null && evt !== undefined){
            evt.stopPropagation(); // this prevents frame button clicks from triggering clickCompInEmail() also.
        }
    },
    


}; // main object


const handlers = {
    clickAddtoEmail: function(templateVariable){ 
        // not the templateID, the entire templateVariable
        main.addComp(templateVariable);
        return false
    },
    selectCompWhenAddingToEmail: function(compId){
        //console.log('Welcome to selectCompWhenAddingToEmail(compId)... compId=',compId)

        // unselect all existing comps
        for (let i = 0; i < main.comps.length; ++i) {
            if (main.comps[i].selected){
                //console.log('this comp is currently selected.  Unselect and turn off the frame', main.comps[i])
                let tempRenderedComp = document.querySelector('#emailCompId'+main.comps[i].id)
                handlers.frameHide(tempRenderedComp)
                main.comps[i].selected = false;
            }
        }

        let selectedComp = getCompWithMatchingId(compId)
        selectedComp.selected = true
        let renderedComp = document.querySelector('#emailCompId'+compId)
        handlers.frameShow(renderedComp)
    },

    clickCompInEmail: function(evt, renderedCompEl){
        const renderedCompDataId = renderedCompEl.dataset.compid; // prev: targetId

        document.querySelector('#idOfComponentBeingEdited').value = renderedCompEl.dataset.compid
        // check data to see if there is a comp that is already selected
        // if found, save that guy as temp
        // clear all
        // if the clicked item == the found guy, do nothing (already cleared)
        // if the clicked itme != the found guy, activate the clicked item
        let existingSelectedId = -1; 
        for (let i = 0; i < main.comps.length; ++i) {
            if (main.comps[i].selected){
                existingSelectedId = main.comps[i].id;
            }
            const renderedCompEl = document.querySelector('#emailCompId'+main.comps[i].id); // might be here
            if (main.comps[i].selected){
                handlers.frameHide(renderedCompEl)
            }
            main.comps[i].selected = false;
        }

        if (renderedCompDataId != existingSelectedId){ // clicked on one that wasn't already selected
            let thisComp = getCompWithMatchingId(renderedCompDataId)
            thisComp.selected = true;
            handlers.frameShow(renderedCompEl)
            main.goEdit(renderedCompEl.dataset.compid, renderedCompEl, evt) // switch to edit_mode
        }
        else{ // clicked on one that WAS already selected
            
            // if in add_mode switch to edit_mode otherwise switch to add_mode
            let addModeEl = document.querySelector('#compnav1')
            if (addModeEl.classList.contains('components-nav-active')){ // if currently in add_mode
                let thisComp = getCompWithMatchingId(renderedCompDataId)
                thisComp.selected = true;
                handlers.frameShow(renderedCompEl)
                main.goEdit(renderedCompEl.dataset.compid, renderedCompEl, evt) // switch to edit_mode
            }
            else{ // if currently in edit_mode
                document.querySelector('#compnav1').click() // switch to add_mode
            }   
        }
        evt.stopPropagation(); // prevent triggering: id="emailComponentsArea" onclick="main.goUnselect()
        evt.preventDefault(); // avoid links in the email fragment from triggering
    },
    frameHide: function(renderedCompEl){
        renderedCompEl.classList.remove('emailCompActive') // frame outline
        const frameBtns = document.querySelectorAll('#'+renderedCompEl.id+' button') // frame buttons
        for (let i = 0; i < frameBtns.length; ++i) {
            frameBtns[i].classList.add('hideme')
        }
    },
    frameShow: function(renderedCompEl){
        renderedCompEl.classList.add('emailCompActive') // frame outline
        const frameBtns = document.querySelectorAll('#'+renderedCompEl.id+' button') // frame buttons
        for (let i = 0; i < frameBtns.length; ++i) {
            frameBtns[i].classList.remove('hideme')
        }
    },
    clickFrameEdit: function(evt, compId){
        //console.log('welcome to the compAction function...')
        // check to see if edit panel is displayed.
        let editPanel = document.querySelector('#components-panel2')
        if (editPanel.classList.contains('hideme')){ // not showing edit panel... so show it!
            document.querySelector('#compnav2').click() // switch to edit_mode
            let parentEl = document.querySelector('#emailCompId'+compId)               
            main.goEdit(compId, parentEl, evt) // jump straight to edit mode!
        }
        evt.stopPropagation(); // this prevents frame button clicks from triggering clickCompInEmail() also.
    },
    copyEmailCode: function(){
        let tempCode = editor.getValue()
        let tempEl = document.querySelector('#emailCodeTemp')
        tempEl.value = tempCode
        tempEl.select()
        document.execCommand('copy');

        let navCopyBtn = document.querySelector('#navBtnCopy')
        navCopyBtn.innerHTML = `<img src="images/check.svg" class="navIcon" alt=""> Copied`

        setTimeout(() => {
            navCopyBtn.innerHTML = `<img src="images/copy-code.svg" class="navIcon" alt=""> Copy code`
        }, 2000);
    },
    copyComponentCode: function(el){
        elTwinEl = document.querySelector('#'+el.dataset.twin)
        elTwinEl.select()
        document.execCommand('copy');    

        // update the text to indicate the copy happened...
        let shared_copyCodeBtn = document.querySelector('#shared_copyCodeBtn')
        shared_copyCodeBtn.innerHTML = `<img src="images/check.svg" class="smallerNavIcon" alt="">Copied`

        setTimeout(() => {
            shared_copyCodeBtn.innerHTML = `<img src="images/copy-code.svg" class="smallerNavIcon" alt="">Copy code`
        }, 2000);
    },
    previewEmailInBrowser: function(){
        let newWindow = window.open();
        newWindow.document.write(editor.getValue());
    },
    openInNewWindow: function(){
        window.open(window.location.href)
    },
    showAboutInfo: function(){
        $('#aboutPanel').slideToggle();
        if (document.querySelector('#navBtnAbout').dataset.status == 'Closed'){
            document.querySelector('#aboutButtonTextSpan').innerHTML = "Close"
            document.querySelector('#navBtnAbout').dataset.status = 'Open'
        }
        else{
            document.querySelector('#aboutButtonTextSpan').innerHTML = "About"
            document.querySelector('#navBtnAbout').dataset.status = 'Closed'
        }
    },



    // #region TEMPLATE REPEAT AREA
    goSavet10: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet10...')
        //let selectedComp = getSelectedComp() // find the selected data comp

        const emailSubjectEl = document.querySelector('#t10_emailSubjectLine')
        const emailPreheaderEl = document.querySelector('#t10_emailPreheader')
        const emailBackgroundColorEl = document.querySelector('#t10_backgroundColor')
        let isValidEmailSubject = false
        let isValidEmailPreheader = false
        let isValidEmailBackgroundColor = false

        if (emailSubjectEl != null && emailSubjectEl.value.length > 0){
            isValidEmailSubject = true;
        }
        if (emailPreheaderEl != null && emailPreheaderEl.value.length > 0){
            isValidEmailPreheader = true;
        }
        if (emailBackgroundColorEl != null && emailBackgroundColorEl.value.length > 0){
            isValidEmailBackgroundColor = true;
        }

        // prepare for all merges...
        baseEmailHtmlTopMerged = baseEmailHtmlTop

        if (isValidEmailSubject){ // subject line
            baseEmailHtmlTopMerged = baseEmailHtmlTopMerged.split('{{emailSubject}}').join(emailSubjectEl.value)
        }
        if (isValidEmailPreheader){ // preheader
            baseEmailHtmlTopMerged = baseEmailHtmlTopMerged.split('{{emailPreheader}}').join(emailPreheaderEl.value)
        }
        if (isValidEmailBackgroundColor){ // this replaces all instances of {{emailBackGroundColor}}
            baseEmailHtmlTopMerged = baseEmailHtmlTopMerged.split('{{emailBackGroundColor}}').join(emailBackgroundColorEl.value)
        }

        view.displayComponents()
    }, // 10

    goSavet90: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet90...')
        let selectedComp = getSelectedComp() // find the selected data comp
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t90_backgroundColor').value
        selectedComp.templateValuesObj.linkColor = document.querySelector('#t90_linkColor').value
        selectedComp.templateValuesObj.linkUrl = document.querySelector('#t90_linkUrl').value
        selectedComp.templateValuesObj.linkText = document.querySelector('#t90_linkText').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 90

    goSavet100: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet100...')
        let selectedComp = getSelectedComp()

        let presetValue = document.querySelector('#t100_presetDD').value
        if (presetValue == 'unum_logo-white_bg-color'){
            document.querySelector('#t100_backgroundColor').value = '#015294'
            document.querySelector('#t100_logoSrc').value = 'https://github.com/unumux/birch-builder-2/blob/master/images/components/unum-logo-white-pad-right.png?raw=true'
            document.querySelector('#t100_logoAltText').value = "[Unum]"
            document.querySelector('#t100_logoAltTextColor').value = "white"
            document.querySelector('#t100_ctaTextColor').value = "white"
        }
        if (presetValue == 'colonial_logo-white_bg-color'){
            document.querySelector('#t100_backgroundColor').value = '#19557F'
            document.querySelector('#t100_logoSrc').value = 'https://github.com/unumux/birch-builder-2/blob/master/images/components/colonial-logo-white-10r.png?raw=true'
            document.querySelector('#t100_logoAltText').value = "[Colonial Life]"
            document.querySelector('#t100_logoAltTextColor').value = "white"
            document.querySelector('#t100_ctaTextColor').value = "white"
        }
        if (presetValue == 'unum_logo-color_bg-white'){
            document.querySelector('#t100_backgroundColor').value = 'white'
            document.querySelector('#t100_logoSrc').value = 'https://github.com/unumux/birch-builder-2/blob/master/images/components/unum-logo-pad-right.png?raw=true'
            document.querySelector('#t100_logoAltText').value = "[Unum]"
            document.querySelector('#t100_logoAltTextColor').value = "#015294"
            document.querySelector('#t100_ctaTextColor').value = "#015294"
        }
        if (presetValue == 'colonial_logo-color_bg-white'){
            document.querySelector('#t100_backgroundColor').value = 'white'
            document.querySelector('#t100_logoSrc').value = 'https://github.com/unumux/birch-builder-2/blob/master/images/components/colonial-logo-10r.png?raw=true'
            document.querySelector('#t100_logoAltText').value = "[Colonial Life]"
            document.querySelector('#t100_logoAltTextColor').value = "#19557F"
            document.querySelector('#t100_ctaTextColor').value = "#19557F"
        }

        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t100_backgroundColor').value
        selectedComp.templateValuesObj.logoUrl = document.querySelector('#t100_logoUrl').value
        selectedComp.templateValuesObj.logoSrc = document.querySelector('#t100_logoSrc').value
        selectedComp.templateValuesObj.logoAltText = document.querySelector('#t100_logoAltText').value
        selectedComp.templateValuesObj.logoAltTextColor = document.querySelector('#t100_logoAltTextColor').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t100_ctaTextColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t100_ctaUrl').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t100_ctaText').value
        mergeCodeWithDataForEditShared()

        view.displayComponents()
    }, // 100

    goSavet101: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet101...')
        let selectedComp = getSelectedComp()

        let presetValue = document.querySelector('#t101_presetDD').value
        if (presetValue == 'unum_logo-white_bg-color'){
            document.querySelector('#t101_backgroundColor').value = '#015294'
            document.querySelector('#t101_logoSrc').value = 'https://github.com/unumux/birch-builder-2/blob/master/images/components/unum-logo-white-pad-right.png?raw=true'
            document.querySelector('#t101_logoAltText').value = "[Unum]"
            document.querySelector('#t101_logoAltTextColor').value = "white"
            document.querySelector('#t101_headerbarColor').value = "white"
            document.querySelector('#t101_descTextColor').value = "white"
        }
        if (presetValue == 'colonial_logo-white_bg-color'){
            document.querySelector('#t101_backgroundColor').value = '#19557F'
            document.querySelector('#t101_logoSrc').value = 'https://github.com/unumux/birch-builder-2/blob/master/images/components/colonial-logo-white-10r.png?raw=true'
            document.querySelector('#t101_logoAltText').value = "[Colonial Life]"
            document.querySelector('#t101_logoAltTextColor').value = "white"
            document.querySelector('#t101_headerbarColor').value = "white"
            document.querySelector('#t101_descTextColor').value = "white"
        }
        if (presetValue == 'unum_logo-color_bg-white'){
            document.querySelector('#t101_backgroundColor').value = 'white'
            document.querySelector('#t101_logoSrc').value = 'https://github.com/unumux/birch-builder-2/blob/master/images/components/unum-logo-pad-right.png?raw=true'
            document.querySelector('#t101_logoAltText').value = "[Unum]"
            document.querySelector('#t101_logoAltTextColor').value = "#015294"
            document.querySelector('#t101_headerbarColor').value = "#015294"
            document.querySelector('#t101_descTextColor').value = "#015294"
        }
        if (presetValue == 'colonial_logo-color_bg-white'){
            document.querySelector('#t101_backgroundColor').value = 'white'
            document.querySelector('#t101_logoSrc').value = 'https://github.com/unumux/birch-builder-2/blob/master/images/components/colonial-logo-10r.png?raw=true'
            document.querySelector('#t101_logoAltText').value = "[Colonial Life]"
            document.querySelector('#t101_logoAltTextColor').value = "#19557F"
            document.querySelector('#t101_headerbarColor').value = "#19557F"
            document.querySelector('#t101_descTextColor').value = "#19557F"
        }

        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t101_backgroundColor').value
        selectedComp.templateValuesObj.logoUrl = document.querySelector('#t101_logoUrl').value
        selectedComp.templateValuesObj.logoSrc = document.querySelector('#t101_logoSrc').value
        selectedComp.templateValuesObj.logoAltText = document.querySelector('#t101_logoAltText').value
        selectedComp.templateValuesObj.logoAltTextColor = document.querySelector('#t101_logoAltTextColor').value
        selectedComp.templateValuesObj.headerbarColor = document.querySelector('#t101_headerbarColor').value
        selectedComp.templateValuesObj.descTextColor = document.querySelector('#t101_descTextColor').value
        selectedComp.templateValuesObj.descText = document.querySelector('#t101_descText').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 101

    goSavet102: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet102...')
        let selectedComp = getSelectedComp()

        let presetValue = document.querySelector('#t102_presetDD').value
        if (presetValue == 'unum_logo-white_bg-color'){
            document.querySelector('#t102_backgroundColor').value = '#015294'
            document.querySelector('#t102_logoSrc').value = 'https://github.com/unumux/birch-builder-2/blob/master/images/components/unum-logo-white-pad-right.png?raw=true'
            document.querySelector('#t102_logoAltText').value = "[Unum]"
            document.querySelector('#t102_logoAltTextColor').value = "white"
            document.querySelector('#t102_headerbarColor').value = "white"
            document.querySelector('#t102_descTextColor').value = "white"
            document.querySelector('#t102_ctaTextColor').value = "white"
        }
        if (presetValue == 'colonial_logo-white_bg-color'){
            document.querySelector('#t102_backgroundColor').value = '#19557F'
            document.querySelector('#t102_logoSrc').value = 'https://github.com/unumux/birch-builder-2/blob/master/images/components/colonial-logo-white-10r.png?raw=true'
            document.querySelector('#t102_logoAltText').value = "[Colonial Life]"
            document.querySelector('#t102_logoAltTextColor').value = "white"
            document.querySelector('#t102_headerbarColor').value = "white"
            document.querySelector('#t102_descTextColor').value = "white"
            document.querySelector('#t102_ctaTextColor').value = "white"
        }
        if (presetValue == 'unum_logo-color_bg-white'){
            document.querySelector('#t102_backgroundColor').value = 'white'
            document.querySelector('#t102_logoSrc').value = 'https://github.com/unumux/birch-builder-2/blob/master/images/components/unum-logo-pad-right.png?raw=true'
            document.querySelector('#t102_logoAltText').value = "[Unum]"
            document.querySelector('#t102_logoAltTextColor').value = "#015294"
            document.querySelector('#t102_headerbarColor').value = "#015294"
            document.querySelector('#t102_descTextColor').value = "#015294"
            document.querySelector('#t102_ctaTextColor').value = "#015294"
        }
        if (presetValue == 'colonial_logo-color_bg-white'){
            document.querySelector('#t102_backgroundColor').value = 'white'
            document.querySelector('#t102_logoSrc').value = 'https://github.com/unumux/birch-builder-2/blob/master/images/components/colonial-logo-10r.png?raw=true'
            document.querySelector('#t102_logoAltText').value = "[Colonial Life]"
            document.querySelector('#t102_logoAltTextColor').value = "#19557F"
            document.querySelector('#t102_headerbarColor').value = "#19557F"
            document.querySelector('#t102_descTextColor').value = "#19557F"
            document.querySelector('#t102_ctaTextColor').value = "#19557F"
        }

        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t102_backgroundColor').value
        selectedComp.templateValuesObj.logoUrl = document.querySelector('#t102_logoUrl').value
        selectedComp.templateValuesObj.logoSrc = document.querySelector('#t102_logoSrc').value
        selectedComp.templateValuesObj.logoAltText = document.querySelector('#t102_logoAltText').value
        selectedComp.templateValuesObj.logoAltTextColor = document.querySelector('#t102_logoAltTextColor').value
        selectedComp.templateValuesObj.headerbarColor = document.querySelector('#t102_headerbarColor').value
        selectedComp.templateValuesObj.descTextColor = document.querySelector('#t102_descTextColor').value
        selectedComp.templateValuesObj.descText = document.querySelector('#t102_descText').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t102_ctaTextColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t102_ctaUrl').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t102_ctaText').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 102

    goSavet103: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet103...')
        let selectedComp = getSelectedComp()

        let presetValue = document.querySelector('#t103_presetDD').value
        if (presetValue == 'unum_logo-white_bg-color'){
            document.querySelector('#t103_backgroundColor').value = '#015294'
            document.querySelector('#t103_logoSrc').value = 'https://github.com/unumux/birch-builder-2/blob/master/images/components/unum-logo-white-pad-right.png?raw=true'
            document.querySelector('#t103_logoAltText').value = "[Unum]"
            document.querySelector('#t103_logoAltTextColor').value = "white"
            document.querySelector('#t103_headerbarColor').value = "white"
            document.querySelector('#t103_descTextColor').value = "white"
            document.querySelector('#t103_dateTextColor').value = "white"
        }
        if (presetValue == 'colonial_logo-white_bg-color'){
            document.querySelector('#t103_backgroundColor').value = '#19557F'
            document.querySelector('#t103_logoSrc').value = 'https://github.com/unumux/birch-builder-2/blob/master/images/components/colonial-logo-white-10r.png?raw=true'
            document.querySelector('#t103_logoAltText').value = "[Colonial Life]"
            document.querySelector('#t103_logoAltTextColor').value = "white"
            document.querySelector('#t103_headerbarColor').value = "white"
            document.querySelector('#t103_descTextColor').value = "white"
            document.querySelector('#t103_dateTextColor').value = "white"
        }
        if (presetValue == 'unum_logo-color_bg-white'){
            document.querySelector('#t103_backgroundColor').value = 'white'
            document.querySelector('#t103_logoSrc').value = 'https://github.com/unumux/birch-builder-2/blob/master/images/components/unum-logo-pad-right.png?raw=true'
            document.querySelector('#t103_logoAltText').value = "[Unum]"
            document.querySelector('#t103_logoAltTextColor').value = "#015294"
            document.querySelector('#t103_headerbarColor').value = "#015294"
            document.querySelector('#t103_descTextColor').value = "#015294"
            document.querySelector('#t103_dateTextColor').value = "#015294"
        }
        if (presetValue == 'colonial_logo-color_bg-white'){
            document.querySelector('#t103_backgroundColor').value = 'white'
            document.querySelector('#t103_logoSrc').value = 'https://github.com/unumux/birch-builder-2/blob/master/images/components/colonial-logo-10r.png?raw=true'
            document.querySelector('#t103_logoAltText').value = "[Colonial Life]"
            document.querySelector('#t103_logoAltTextColor').value = "#19557F"
            document.querySelector('#t103_headerbarColor').value = "#19557F"
            document.querySelector('#t103_descTextColor').value = "#19557F"
            document.querySelector('#t103_dateTextColor').value = "#19557F"
        }

        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t103_backgroundColor').value
        selectedComp.templateValuesObj.logoUrl = document.querySelector('#t103_logoUrl').value
        selectedComp.templateValuesObj.logoSrc = document.querySelector('#t103_logoSrc').value
        selectedComp.templateValuesObj.logoAltText = document.querySelector('#t103_logoAltText').value
        selectedComp.templateValuesObj.logoAltTextColor = document.querySelector('#t103_logoAltTextColor').value
        selectedComp.templateValuesObj.headerbarColor = document.querySelector('#t103_headerbarColor').value
        selectedComp.templateValuesObj.descTextColor = document.querySelector('#t103_descTextColor').value
        selectedComp.templateValuesObj.descText = document.querySelector('#t103_descText').value
        selectedComp.templateValuesObj.dateTextColor = document.querySelector('#t103_dateTextColor').value
        selectedComp.templateValuesObj.dateText = document.querySelector('#t103_dateText').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 103

    goSavet104: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet104...')
        let selectedComp = getSelectedComp()

        let presetValue = document.querySelector('#t104_presetDD').value
        if (presetValue == 'paulrevere_logo-color_bg-white'){  
            document.querySelector('#t104_backgroundColor').value = 'white'
            document.querySelector('#t104_logoSrc').value = 'https://github.com/unumux/birch-builder-2/blob/master/images/components/paul-revere-logo-color-10r.png?raw=true'
            document.querySelector('#t104_logoAltText').value = "[Colonial Voluntary Benefits]"
            document.querySelector('#t104_logoAltTextColor').value = "#19557F"
            document.querySelector('#t104_ctaTextColor').value = "#19557F"
        }
        if (presetValue == 'paulrevere_logo-white_bg-color'){ 
            document.querySelector('#t104_backgroundColor').value = '#19557F'
            document.querySelector('#t104_logoSrc').value = 'https://github.com/unumux/birch-builder-2/blob/master/images/components/paul-revere-logo-white-10r.png?raw=true'
            document.querySelector('#t104_logoAltText').value = "[Colonial Voluntary Benefits]"
            document.querySelector('#t104_logoAltTextColor').value = "white"
            document.querySelector('#t104_ctaTextColor').value = "white"
        }

        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t104_backgroundColor').value
        selectedComp.templateValuesObj.logoUrl = document.querySelector('#t104_logoUrl').value
        selectedComp.templateValuesObj.logoSrc = document.querySelector('#t104_logoSrc').value
        selectedComp.templateValuesObj.logoAltText = document.querySelector('#t104_logoAltText').value
        selectedComp.templateValuesObj.logoAltTextColor = document.querySelector('#t104_logoAltTextColor').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t104_ctaTextColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t104_ctaUrl').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t104_ctaText').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 104

    goSavet150: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet150...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t150_backgroundColor').value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t150_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t150_h1Text').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 150

    goSavet150b: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet150b...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t150b_backgroundColor').value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t150b_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t150b_h1Text').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 150b

    goSavet151: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet151...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t151_backgroundColor').value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t151_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t151_h1Text').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t151_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t151_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t151_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t151_ctaText').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 151

    goSavet152: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet152...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t152_backgroundColor').value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t152_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t152_h1Text').value
        selectedComp.templateValuesObj.pText = document.querySelector('#t152_pText').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t152_pTextColor').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 152

    goSavet153: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet153...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t153_backgroundColor').value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t153_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t153_h1Text').value
        selectedComp.templateValuesObj.pText = document.querySelector('#t153_pText').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t153_pTextColor').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t153_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t153_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t153_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t153_ctaText').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 153

    goSavet154: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet154...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t154_backgroundColor').value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t154_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t154_h1Text').value
        selectedComp.templateValuesObj.iconUrl = document.querySelector('#t154_iconUrl').value
        selectedComp.templateValuesObj.iconAltText = document.querySelector('#t154_iconAltText').value
        selectedComp.templateValuesObj.iconAltTextColor = document.querySelector('#t154_iconAltTextColor').value
        //selectedComp.templateValuesObj.iconUrl = document.querySelector('#t154_iconDD').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 154

    goSavet155: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet155...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t155_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t155_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t155_imgAltTextColor').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 155

    goSavet156: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet156...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t156_backgroundColor').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t156_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t156_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t156_imgAltTextColor').value
        selectedComp.templateValuesObj.backgroundColor2 = document.querySelector('#t156_backgroundColor').value // use above backgroundColor value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t156_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t156_h1Text').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 156

    goSavet157: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet157...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t157_backgroundColor').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t157_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t157_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t157_imgAltTextColor').value
        selectedComp.templateValuesObj.backgroundColor2 = document.querySelector('#t157_backgroundColor').value // use above backgroundColor value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t157_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t157_h1Text').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t157_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t157_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t157_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t157_ctaText').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 157

    goSavet157b: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet157b...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t157b_backgroundColor').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t157b_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t157b_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t157b_imgAltTextColor').value
        selectedComp.templateValuesObj.backgroundColor2 = document.querySelector('#t157b_backgroundColor').value // use above backgroundColor value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t157b_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t157b_h1Text').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t157b_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t157b_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t157b_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t157b_ctaText').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 157b

    goSavet158: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet158...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t158_backgroundColor').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t158_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t158_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t158_imgAltTextColor').value
        selectedComp.templateValuesObj.iconUrl = document.querySelector('#t158_iconUrl').value
        selectedComp.templateValuesObj.iconAltText = document.querySelector('#t158_iconAltText').value
        selectedComp.templateValuesObj.iconAltTextColor = document.querySelector('#t158_iconAltTextColor').value
        selectedComp.templateValuesObj.backgroundColor2 = document.querySelector('#t158_backgroundColor').value // use above backgroundColor value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t158_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t158_h1Text').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 158

    goSavet160: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet160...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t160_backgroundColor').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t160_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t160_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t160_imgAltTextColor').value
        selectedComp.templateValuesObj.backgroundColor2 = document.querySelector('#t160_backgroundColor').value // use above backgroundColor value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t160_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t160_h1Text').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 160

    goSavet161: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet161...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t161_backgroundColor').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t161_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t161_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t161_imgAltTextColor').value
        selectedComp.templateValuesObj.backgroundColor2 = document.querySelector('#t161_backgroundColor').value // use above backgroundColor value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t161_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t161_h1Text').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t161_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t161_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t161_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t161_ctaText').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 161

    goSavet161b: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet161b...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t161b_backgroundColor').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t161b_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t161b_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t161b_imgAltTextColor').value
        selectedComp.templateValuesObj.backgroundColor2 = document.querySelector('#t161b_backgroundColor').value // use above backgroundColor value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t161b_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t161b_h1Text').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t161b_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t161b_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t161b_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t161b_ctaText').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 161b

    goSavet162: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet162...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t162_backgroundColor').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t162_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t162_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t162_imgAltTextColor').value
        selectedComp.templateValuesObj.iconUrl = document.querySelector('#t162_iconUrl').value
        selectedComp.templateValuesObj.iconAltText = document.querySelector('#t162_iconAltText').value
        selectedComp.templateValuesObj.iconAltTextColor = document.querySelector('#t162_iconAltTextColor').value
        selectedComp.templateValuesObj.backgroundColor2 = document.querySelector('#t162_backgroundColor').value // use above backgroundColor value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t162_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t162_h1Text').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 162

    goSavet163: function(){ // enter edit mode for a component in the email
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t163_backgroundColor').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 163

    goSavet200: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet200...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t200_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t200_spacerTop').value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t200_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t200_h1Text').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t200_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t200_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t200_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t200_ctaText').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t200_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 200

    goSavet201: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet201...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t201_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t201_spacerTop').value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t201_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t201_h1Text').value
        selectedComp.templateValuesObj.pText = document.querySelector('#t201_pText').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t201_pTextColor').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t201_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t201_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t201_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t201_ctaText').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t201_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 201

    goSavet201c: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet201c...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t201c_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t201c_spacerTop').value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t201c_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t201c_h1Text').value
        selectedComp.templateValuesObj.pText = document.querySelector('#t201c_pText').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t201c_pTextColor').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t201c_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 201c

    goSavet202: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet202...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t202_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t202_spacerTop').value
        selectedComp.templateValuesObj.h2TextColor = document.querySelector('#t202_h2TextColor').value
        selectedComp.templateValuesObj.h2Text = document.querySelector('#t202_h2Text').value
        selectedComp.templateValuesObj.pText = document.querySelector('#t202_pText').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t202_pTextColor').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t202_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t202_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t202_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t202_ctaText').value
        selectedComp.templateValuesObj.linkUrl = document.querySelector('#t202_linkUrl').value
        selectedComp.templateValuesObj.linkColor = document.querySelector('#t202_linkColor').value
        selectedComp.templateValuesObj.linkText = document.querySelector('#t202_linkText').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t202_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 202

    goSavet203: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet203...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t203_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t203_spacerTop').value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t203_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t203_h1Text').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t203_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t203_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t203_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t203_ctaText').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t203_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 203

    goSavet204: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet204...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t204_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t204_spacerTop').value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t204_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t204_h1Text').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t204_pTextColor').value
        selectedComp.templateValuesObj.pText = document.querySelector('#t204_pText').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t204_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t204_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t204_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t204_ctaText').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t204_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 204

    goSavet204e: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet204e...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t204e_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t204e_spacerTop').value
        selectedComp.templateValuesObj.iconUrl = document.querySelector('#t204e_iconUrl').value
        selectedComp.templateValuesObj.iconAltText = document.querySelector('#t204e_iconAltText').value
        selectedComp.templateValuesObj.iconAltTextColor = document.querySelector('#t204e_iconAltTextColor').value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t204e_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t204e_h1Text').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t204e_pTextColor').value
        selectedComp.templateValuesObj.pText = document.querySelector('#t204e_pText').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t204e_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t204e_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t204e_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t204e_ctaText').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t204e_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 204e

    goSavet204i: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet204i...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t204i_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t204i_spacerTop').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t204i_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t204i_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t204i_imgAltTextColor').value
        selectedComp.templateValuesObj.h1TextColor = document.querySelector('#t204i_h1TextColor').value
        selectedComp.templateValuesObj.h1Text = document.querySelector('#t204i_h1Text').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t204i_pTextColor').value
        selectedComp.templateValuesObj.pText = document.querySelector('#t204i_pText').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t204i_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t204i_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t204i_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t204i_ctaText').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t204i_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 204i

    goSavet205: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet205...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t205_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t205_spacerTop').value
        selectedComp.templateValuesObj.h2TextColor = document.querySelector('#t205_h2TextColor').value
        selectedComp.templateValuesObj.h2Text = document.querySelector('#t205_h2Text').value
        selectedComp.templateValuesObj.bulletTextColor = document.querySelector('#t205_bulletTextColor').value
        selectedComp.templateValuesObj.listItemsAsString = document.querySelector('#t205_listItemsAsString').value.replace(/(\r\n\t|\n|\r\t)/gm, "") // remove extra line breaks
        selectedComp.templateValuesObj.ulStyle = document.querySelector('#t205_ulStyle').value
        //selectedComp.templateValuesObj.liColor = document.querySelector('#t205_liColor').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t205_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 205

    goSavet205e: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet205e...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t205e_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t205e_spacerTop').value
        selectedComp.templateValuesObj.h2TextColor = document.querySelector('#t205e_h2TextColor').value
        selectedComp.templateValuesObj.h2Text = document.querySelector('#t205e_h2Text').value
        selectedComp.templateValuesObj.bulletTextColor = document.querySelector('#t205e_bulletTextColor').value

        // someText.replace(/(\r\n\t|\n|\r\t)/gm, "");
        selectedComp.templateValuesObj.bulletImageList = document.querySelector('#t205e_bulletImageList').value.replace(/(\r\n\t|\n|\r\t)/gm, "") // remove extra line breaks
        selectedComp.templateValuesObj.bulletTextList = document.querySelector('#t205e_bulletTextList').value.replace(/(\r\n\t|\n|\r\t)/gm, "") // remove extra line breaks
        selectedComp.templateValuesObj.bulletImage1 = document.querySelector('#t205e_bulletImage').value
        selectedComp.templateValuesObj.bulletImage2 = document.querySelector('#t205e_bulletImage').value
        selectedComp.templateValuesObj.bulletImage3 = document.querySelector('#t205e_bulletImage').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t205e_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t205e_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t205e_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t205e_ctaText').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t205e_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 205e

    goSavet206: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet206...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t206_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t206_spacerTop').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t206_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t206_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t206_imgAltTextColor').value
        selectedComp.templateValuesObj.h2TextColor = document.querySelector('#t206_h2TextColor').value
        selectedComp.templateValuesObj.h2Text = document.querySelector('#t206_h2Text').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t206_pTextColor').value
        selectedComp.templateValuesObj.pText = document.querySelector('#t206_pText').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t206_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 206

    goSavet207: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet207...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t207_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t207_spacerTop').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t207_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t207_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t207_imgAltTextColor').value
        selectedComp.templateValuesObj.h2TextColor = document.querySelector('#t207_h2TextColor').value
        selectedComp.templateValuesObj.h2Text = document.querySelector('#t207_h2Text').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t207_pTextColor').value
        selectedComp.templateValuesObj.pText = document.querySelector('#t207_pText').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t207_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t207_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t207_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t207_ctaText').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t207_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 207

    goSavet207b: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet207b...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t207b_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t207b_spacerTop').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t207b_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t207b_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t207b_imgAltTextColor').value
        selectedComp.templateValuesObj.h2TextColor = document.querySelector('#t207b_h2TextColor').value
        selectedComp.templateValuesObj.h2Text = document.querySelector('#t207b_h2Text').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t207b_pTextColor').value
        selectedComp.templateValuesObj.pText = document.querySelector('#t207b_pText').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t207b_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t207b_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t207b_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t207b_ctaText').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t207b_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 207b

    goSavet208: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet208...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t208_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t208_spacerTop').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t208_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t208_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t208_imgAltTextColor').value
        selectedComp.templateValuesObj.h2TextColor = document.querySelector('#t208_h2TextColor').value
        selectedComp.templateValuesObj.h2Text = document.querySelector('#t208_h2Text').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t208_pTextColor').value
        selectedComp.templateValuesObj.pText = document.querySelector('#t208_pText').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t208_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 208

    goSavet208b: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet208b...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t208b_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t208b_spacerTop').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t208b_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t208b_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t208b_imgAltTextColor').value
        selectedComp.templateValuesObj.h2TextColor = document.querySelector('#t208b_h2TextColor').value
        selectedComp.templateValuesObj.h2Text = document.querySelector('#t208b_h2Text').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t208b_pTextColor').value
        selectedComp.templateValuesObj.pText = document.querySelector('#t208b_pText').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t208b_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 208b

    goSavet209: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet209...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t209_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t209_spacerTop').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t209_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t209_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t209_imgAltTextColor').value
        selectedComp.templateValuesObj.h2TextColor = document.querySelector('#t209_h2TextColor').value
        selectedComp.templateValuesObj.h2Text = document.querySelector('#t209_h2Text').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t209_pTextColor').value
        selectedComp.templateValuesObj.pText = document.querySelector('#t209_pText').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t209_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t209_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t209_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t209_ctaText').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t209_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 209

    goSavet210: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet210...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t210_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t210_spacerTop').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t210_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t210_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t210_imgAltTextColor').value
        selectedComp.templateValuesObj.h2TextColor = document.querySelector('#t210_h2TextColor').value
        selectedComp.templateValuesObj.h2Text = document.querySelector('#t210_h2Text').value
        selectedComp.templateValuesObj.iconUrl = document.querySelector('#t210_iconAltText').value
        selectedComp.templateValuesObj.iconAltText = document.querySelector('#t210_iconAltText').value
        selectedComp.templateValuesObj.iconAltTextColor = document.querySelector('#t210_iconAltTextColor').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t210_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 210

    goSavet211: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet211...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t211_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t211_spacerTop').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t211_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t211_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t211_imgAltTextColor').value
        selectedComp.templateValuesObj.h2TextColor = document.querySelector('#t211_h2TextColor').value
        selectedComp.templateValuesObj.h2Text = document.querySelector('#t211_h2Text').value
        selectedComp.templateValuesObj.iconUrl = document.querySelector('#t211_iconUrl').value
        selectedComp.templateValuesObj.iconAltText = document.querySelector('#t211_iconAltText').value
        selectedComp.templateValuesObj.iconAltTextColor = document.querySelector('#t211_iconAltTextColor').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t211_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t211_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t211_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t211_ctaText').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t211_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 211

    goSavet212: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet212...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t212_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t212_spacerTop').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t212_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t212_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t212_imgAltTextColor').value
        selectedComp.templateValuesObj.iconUrl = document.querySelector('#t212_iconUrl').value
        selectedComp.templateValuesObj.iconAltText = document.querySelector('#t212_iconAltText').value
        selectedComp.templateValuesObj.iconAltTextColor = document.querySelector('#t212_iconAltTextColor').value
        selectedComp.templateValuesObj.h2TextColor = document.querySelector('#t212_h2TextColor').value
        selectedComp.templateValuesObj.h2Text = document.querySelector('#t212_h2Text').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t212_pTextColor').value
        selectedComp.templateValuesObj.pText = document.querySelector('#t212_pText').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t212_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 212

    goSavet213: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet213...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t213_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t213_spacerTop').value
        selectedComp.templateValuesObj.h2TextColor = document.querySelector('#t213_h2TextColor').value
        selectedComp.templateValuesObj.h2Text1 = document.querySelector('#t213_h2Text1').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t213_pTextColor').value
        selectedComp.templateValuesObj.pText1 = document.querySelector('#t213_pText1').value
        //selectedComp.templateValuesObj.h2TextColor2 = document.querySelector('#t213_h2TextColor2').value
        selectedComp.templateValuesObj.h2Text2 = document.querySelector('#t213_h2Text2').value
        //selectedComp.templateValuesObj.pTextColor2 = document.querySelector('#t213_pTextColor2').value
        selectedComp.templateValuesObj.pText2 = document.querySelector('#t213_pText2').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t213_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 213

    goSavet214: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet214...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t214_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t214_spacerTop').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t214_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t214_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t214_imgAltTextColor').value
        selectedComp.templateValuesObj.h2TextColor = document.querySelector('#t214_h2TextColor').value
        selectedComp.templateValuesObj.h2Text = document.querySelector('#t214_h2Text').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t214_pTextColor').value
        selectedComp.templateValuesObj.pText = document.querySelector('#t214_pText').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t214_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 214

    goSavet215: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet215...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t215_backgroundColor').value
        selectedComp.templateValuesObj.imgUrl1 = document.querySelector('#t215_imgUrl1').value
        selectedComp.templateValuesObj.imgAltText1 = document.querySelector('#t215_imgAltText1').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t215_imgAltTextColor').value
        selectedComp.templateValuesObj.h2TextColor = document.querySelector('#t215_h2TextColor').value
        selectedComp.templateValuesObj.h2Text1 = document.querySelector('#t215_h2Text1').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t215_pTextColor').value
        selectedComp.templateValuesObj.pText1 = document.querySelector('#t215_pText1').value

        selectedComp.templateValuesObj.imgUrl2 = document.querySelector('#t215_imgUrl2').value
        selectedComp.templateValuesObj.imgAltText2 = document.querySelector('#t215_imgAltText2').value
        //selectedComp.templateValuesObj.imgAltText2Color = document.querySelector('#t215_imgAltText2Color').value
        //selectedComp.templateValuesObj.h2TextColor2 = document.querySelector('#t215_h2TextColor2').value
        selectedComp.templateValuesObj.h2Text2 = document.querySelector('#t215_h2Text2').value
        //selectedComp.templateValuesObj.pTextColor2 = document.querySelector('#t215_pTextColor2').value
        selectedComp.templateValuesObj.pText2 = document.querySelector('#t215_pText2').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 215

    goSavet216: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet216...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t216_backgroundColor').value
        selectedComp.templateValuesObj.spacerTop = document.querySelector('#t216_spacerTop').value
        selectedComp.templateValuesObj.imgUrl = document.querySelector('#t216_imgUrl').value
        selectedComp.templateValuesObj.imgAltText = document.querySelector('#t216_imgAltText').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t216_imgAltTextColor').value
        selectedComp.templateValuesObj.h2TextColor = document.querySelector('#t216_h2TextColor').value
        selectedComp.templateValuesObj.h2Text = document.querySelector('#t216_h2Text').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t216_pTextColor').value
        selectedComp.templateValuesObj.pText = document.querySelector('#t216_pText').value
        selectedComp.templateValuesObj.ctaBackgroundColor = document.querySelector('#t216_ctaBackgroundColor').value
        selectedComp.templateValuesObj.ctaUrl = document.querySelector('#t216_ctaUrl').value
        selectedComp.templateValuesObj.ctaTextColor = document.querySelector('#t216_ctaTextColor').value
        selectedComp.templateValuesObj.ctaText = document.querySelector('#t216_ctaText').value
        selectedComp.templateValuesObj.spacerBottom = document.querySelector('#t216_spacerBottom').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 216

    goSavet217: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet217...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t217_backgroundColor').value
        selectedComp.templateValuesObj.imgUrl1 = document.querySelector('#t217_imgUrl1').value
        selectedComp.templateValuesObj.imgAltText1 = document.querySelector('#t217_imgAltText1').value
        selectedComp.templateValuesObj.imgAltTextColor = document.querySelector('#t217_imgAltTextColor').value
        selectedComp.templateValuesObj.h2TextColor = document.querySelector('#t217_h2TextColor').value
        selectedComp.templateValuesObj.h2Text1 = document.querySelector('#t217_h2Text1').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t217_pTextColor').value
        selectedComp.templateValuesObj.pText1 = document.querySelector('#t217_pText1').value
        selectedComp.templateValuesObj.ctaBackgroundColor1 = document.querySelector('#t217_ctaBackgroundColor1').value
        selectedComp.templateValuesObj.ctaUrl1 = document.querySelector('#t217_ctaUrl1').value
        selectedComp.templateValuesObj.ctaTextColor1 = document.querySelector('#t217_ctaTextColor1').value
        selectedComp.templateValuesObj.ctaText1 = document.querySelector('#t217_ctaText1').value

        selectedComp.templateValuesObj.imgUrl2 = document.querySelector('#t217_imgUrl2').value
        selectedComp.templateValuesObj.imgAltText2 = document.querySelector('#t217_imgAltText2').value
        //selectedComp.templateValuesObj.imgAltText2Color = document.querySelector('#t217_imgAltText2Color').value
        //selectedComp.templateValuesObj.h2TextColor2 = document.querySelector('#t217_h2TextColor2').value
        selectedComp.templateValuesObj.h2Text2 = document.querySelector('#t217_h2Text2').value
        //selectedComp.templateValuesObj.pTextColor2 = document.querySelector('#t217_pTextColor2').value
        selectedComp.templateValuesObj.pText2 = document.querySelector('#t217_pText2').value
        selectedComp.templateValuesObj.ctaBackgroundColor2 = document.querySelector('#t217_ctaBackgroundColor2').value
        selectedComp.templateValuesObj.ctaUrl2 = document.querySelector('#t217_ctaUrl2').value
        selectedComp.templateValuesObj.ctaTextColor2 = document.querySelector('#t217_ctaTextColor2').value
        selectedComp.templateValuesObj.ctaText2 = document.querySelector('#t217_ctaText2').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 217

    goSavet300: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet300...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t300_backgroundColor').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t300_pTextColor').value
        selectedComp.templateValuesObj.footerUwStatementAndDisclosures = document.querySelector('#t300_footerUwStatementAndDisclosures').value
        selectedComp.templateValuesObj.year = document.querySelector('#t300_year').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 300

    goSavet301: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet301...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t301_backgroundColor').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t301_pTextColor').value
        selectedComp.templateValuesObj.emailLinkUrl = document.querySelector('#t301_emailLinkUrl').value
        selectedComp.templateValuesObj.emailLinkText = document.querySelector('#t301_emailLinkText').value
        selectedComp.templateValuesObj.loginLinkUrl = document.querySelector('#t301_loginLinkUrl').value
        selectedComp.templateValuesObj.loginLinkText = document.querySelector('#t301_loginLinkText').value
        selectedComp.templateValuesObj.callLinkUrl = document.querySelector('#t301_callLinkUrl').value
        selectedComp.templateValuesObj.callLinkText = document.querySelector('#t301_callLinkText').value
        selectedComp.templateValuesObj.footerUwStatementAndDisclosures = document.querySelector('#t301_footerUwStatementAndDisclosures').value
        selectedComp.templateValuesObj.year = document.querySelector('#t301_year').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 301

    goSavet302: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet302...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t302_backgroundColor').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t302_pTextColor').value
        selectedComp.templateValuesObj.footerUwStatementAndDisclosures = document.querySelector('#t302_footerUwStatementAndDisclosures').value
        selectedComp.templateValuesObj.year = document.querySelector('#t302_year').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 302

    goSavet302s: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet302s...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t302s_backgroundColor').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t302s_pTextColor').value
        selectedComp.templateValuesObj.footerUwStatementAndDisclosures = document.querySelector('#t302s_footerUwStatementAndDisclosures').value
        selectedComp.templateValuesObj.year = document.querySelector('#t302s_year').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 302s

    goSavet320: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet320...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t320_backgroundColor').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t320_pTextColor').value
        selectedComp.templateValuesObj.footerUwStatementAndDisclosures = document.querySelector('#t320_footerUwStatementAndDisclosures').value
        selectedComp.templateValuesObj.year = document.querySelector('#t320_year').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 320

    goSavet320s: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet320s...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t320s_backgroundColor').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t320s_pTextColor').value
        selectedComp.templateValuesObj.footerUwStatementAndDisclosures = document.querySelector('#t320s_footerUwStatementAndDisclosures').value
        selectedComp.templateValuesObj.year = document.querySelector('#t320s_year').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 320s

    goSavet321: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet321...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t321_backgroundColor').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t321_pTextColor').value
        selectedComp.templateValuesObj.footerUwStatementAndDisclosures = document.querySelector('#t321_footerUwStatementAndDisclosures').value
        selectedComp.templateValuesObj.year = document.querySelector('#t321_year').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 321

    goSavet321s: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet321s...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t321s_backgroundColor').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t321s_pTextColor').value
        selectedComp.templateValuesObj.footerUwStatementAndDisclosures = document.querySelector('#t321s_footerUwStatementAndDisclosures').value
        selectedComp.templateValuesObj.year = document.querySelector('#t321s_year').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 321s

    goSavet340: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet340...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t340_backgroundColor').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t340_pTextColor').value
        selectedComp.templateValuesObj.footerUwStatementAndDisclosures = document.querySelector('#t340_footerUwStatementAndDisclosures').value
        selectedComp.templateValuesObj.year = document.querySelector('#t340_year').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 340

    goSavet341: function(){ // enter edit mode for a component in the email
        //console.log('welcome to goSavet341...')
        let selectedComp = getSelectedComp()
        selectedComp.templateValuesObj.backgroundColor = document.querySelector('#t341_backgroundColor').value
        selectedComp.templateValuesObj.pTextColor = document.querySelector('#t341_pTextColor').value
        selectedComp.templateValuesObj.footerUwStatementAndDisclosures = document.querySelector('#t341_footerUwStatementAndDisclosures').value
        selectedComp.templateValuesObj.year = document.querySelector('#t341_year').value
        mergeCodeWithDataForEditShared()
        view.displayComponents()
    }, // 341

    // #endregion TEMPLATE REPEAT AREA

        


        

}; // end handlers





const view = {
    displayComponents: function(){
        //console.log('welcome to view.displayComponents...')
        // emailCompListArea
        const targetRenderElement = document.querySelector('#emailCompListArea')
        targetRenderElement.innerHTML = '' // clear it first

        // prep for feeding editor
        //let ed = document.querySelector('#editor')
        //ed.innerHTML = ""; // clear
        let allthecode = ''
        

        //main.comps.forEach(function(comp, i){
        for (let i = 0; i < main.comps.length; ++i) {
            //console.log(main.comps[i])
            compcode = mergeDataIntoPlaceholders(main.comps[i].template.baseCode, main.comps[i].templateValuesObj)
            allthecode += '\n\n' + compcode

            let att = null;

            let createdEl1 = document.createElement("div")
            let createdEl1Classes = 'emailCompListItem'
            if (main.comps[i].selected){
                createdEl1Classes += ' emailCompActive'
            }
            createdEl1.className = createdEl1Classes
            createdEl1.id = 'emailCompId'+main.comps[i].id
            targetRenderElement.appendChild(createdEl1)
            // puff
                att = document.createAttribute("onclick");
                att.value = 'handlers.clickCompInEmail(event, this);';
                createdEl1.setAttributeNode(att);

                att = document.createAttribute('data-compid');
                att.value = main.comps[i].id;
                createdEl1.setAttributeNode(att);

                att = document.createAttribute('data-templateId');
                att.value = main.comps[i].template.templateId;
                createdEl1.setAttributeNode(att);

            let createdEl2 = document.createElement("div")
            createdEl2.className = 'content';
            createdEl2.id = 'emailCompContentId'+i;
            createdEl2.innerHTML = compcode
            createdEl1.appendChild(createdEl2);

            //createdEl1.addEventListener("click", clicktest, false)
            //createdEl1.addEventListener("click", handlers.clickCompInEmail(this), false)

            // up button
            let createdEl3 = document.createElement("button")
            let createdEl3Classes = 'positionBtn positionBtnUp hideme'
            if (main.comps[i].selected){
                createdEl3Classes += 'positionBtn positionBtnUp'
            }
            createdEl3.className = createdEl3Classes;
                att = document.createAttribute("onclick");
                //att.value = 'handlers.compAction(event, this, "up")';
                att.value = 'main.goUp2(event, '+main.comps[i].id+')';
                createdEl3.setAttributeNode(att);

                att = document.createAttribute("type");
                att.value = 'button';
                createdEl3.setAttributeNode(att);
            createdEl1.appendChild(createdEl3);

            let createdEl4 = document.createElement("div")
            createdEl4.className = 'iconWrapper iconWrapper--top';
            createdEl3.appendChild(createdEl4);

            // let createdEl5 = document.createElement("i")
            // createdEl5.className = 'fas fa-arrow-up';
            // createdEl4.appendChild(createdEl5);
            let createdEl5 = document.createElement("img")
            createdEl5.src = 'images/arrow-up.svg';
                att = document.createAttribute("alt");
                att.value = '';
                createdEl5.setAttributeNode(att);
            createdEl4.appendChild(createdEl5);

            // delete button
            let createdEl6 = document.createElement("button")
            let createdEl6Classes = 'positionBtn positionBtnLeft hideme'
            if (main.comps[i].selected){
                createdEl6Classes += 'positionBtn positionBtnLeft'
            }
            createdEl6.className = createdEl6Classes;
                att = document.createAttribute("onclick");
                // att.value = 'handlers.compAction(event, this, "delete")';
                att.value = 'main.goDelete2(event, '+main.comps[i].id+')';
                createdEl6.setAttributeNode(att);

                att = document.createAttribute("type");
                att.value = 'button';
                createdEl6.setAttributeNode(att);
            createdEl1.appendChild(createdEl6);

            let createdEl7 = document.createElement("div")
            createdEl7.className = 'iconWrapper iconWrapper--red iconWrapper--left';
            createdEl6.appendChild(createdEl7);

            // let createdEl8 = document.createElement("i")
            // createdEl8.className = 'fas fa-trash-alt';
            // createdEl7.appendChild(createdEl8);
            let createdEl8 = document.createElement("img")
            createdEl8.src = 'images/delete.svg';
                att = document.createAttribute("alt");
                att.value = '';
                createdEl8.setAttributeNode(att);
            createdEl7.appendChild(createdEl8);

            // edit button
            let createdEl9 = document.createElement("button")
            let createdEl9Classes = 'positionBtn positionBtnRight hideme'
            if (main.comps[i].selected){
                createdEl9Classes += 'positionBtn positionBtnRight'
            }
            createdEl9.className = createdEl9Classes;
                att = document.createAttribute("onclick");
                // att.value = 'handlers.compAction(event, this, "edit")';
                att.value = 'handlers.clickFrameEdit(event, '+main.comps[i].id+')';
                createdEl9.setAttributeNode(att);

                att = document.createAttribute("type");
                att.value = 'button';
                createdEl9.setAttributeNode(att);
            createdEl1.appendChild(createdEl9);

            let createdEl10 = document.createElement("div")
            createdEl10.className = 'iconWrapper iconWrapper--right';
            createdEl9.appendChild(createdEl10);

            // let createdEl11 = document.createElement("i")
            // createdEl11.className = 'fas fa-pencil-alt';
            // createdEl10.appendChild(createdEl11);

            let createdEl11 = document.createElement("img")
            createdEl11.src = 'images/edit.svg';
                att = document.createAttribute("alt");
                att.value = '';
                createdEl11.setAttributeNode(att);
            createdEl10.appendChild(createdEl11);

            //<img src="images/edit-tab.svg" alt=""></img>

            // down button
            let createdEl12 = document.createElement("button")
            let createdEl12Classes = 'positionBtn positionBtnDown hideme'
            if (main.comps[i].selected){
                createdEl12Classes += 'positionBtn positionBtnDown'
            }
            createdEl12.className = createdEl12Classes;
                att = document.createAttribute("onclick");
                // att.value = 'handlers.compAction(event, this, "down")';
                att.value = 'main.goDown2(event, '+main.comps[i].id+')';
                createdEl12.setAttributeNode(att);

                att = document.createAttribute("type");
                att.value = 'button';
                createdEl12.setAttributeNode(att);
            createdEl1.appendChild(createdEl12);

            let createdEl13 = document.createElement("div")
            createdEl13.className = 'iconWrapper iconWrapper--bottom';
            createdEl12.appendChild(createdEl13);

            // let createdEl14 = document.createElement("i")
            // createdEl14.className = 'fas fa-arrow-down';
            // createdEl13.appendChild(createdEl14);
            let createdEl14 = document.createElement("img")
            createdEl14.src = 'images/arrow-down.svg';
                att = document.createAttribute("alt");
                att.value = '';
                createdEl14.setAttributeNode(att);
            createdEl13.appendChild(createdEl14);

        }
        editor.getSession().setValue(baseEmailHtmlTopMerged + allthecode + baseEmailHtmlBottom);
        editor.renderer.updateFull();

        //accordion.refresh()
        $(window).trigger('resize');

    } // end displayComponents
}  // end view


function initJS(){
    //themeChange('unum')

    Split(['#emailComponentsArea', '#emailCodeArea'], {
        direction: 'vertical',
        sizes: [80, 20],
        gutterSize: 20
    })

    document.querySelector('#editor').classList.remove('hideme')
    handlers.goSavet10()
    //$('#accord-headers').click(); // default this one to open. 
} // initJS()

function themeChange(theme){
    //console.log('welcome to themeChange...received theme:', theme)

    if(theme == 'unum'){
        document.querySelector('#t10_EmailThemeDD [value="unum"]').selected = true;
        // update the accord "last component" labels
        document.querySelector('#accord-headers-last-id').innerHTML = '103'
        document.querySelector('#accord-banners-last-id').innerHTML = '158'
        document.querySelector('#accord-body-last-id').innerHTML = '217'
        document.querySelector('#accord-footers-first-id').innerHTML = '300'
        document.querySelector('#accord-footers-last-id').innerHTML = '302s'
    }
    if(theme == 'colonial'){
        document.querySelector('#t10_EmailThemeDD [value="colonial"]').selected = true;
        // update the accord "last component" labels
        document.querySelector('#accord-headers-last-id').innerHTML = '104'
        document.querySelector('#accord-banners-last-id').innerHTML = '163'
        document.querySelector('#accord-body-last-id').innerHTML = '217'
        document.querySelector('#accord-footers-first-id').innerHTML = '320'
        document.querySelector('#accord-footers-last-id').innerHTML = '341'
    }
    let compArray = [];
    compArray.push(megaTemplateObj.templateObj_90)
    compArray.push(megaTemplateObj.templateObj_100)
    compArray.push(megaTemplateObj.templateObj_101)
    compArray.push(megaTemplateObj.templateObj_102)
    //compArray.push(megaTemplateObj.templateObj_103) // made obsolete with dynamic cta controls
    if (theme == 'colonial'){
        compArray.push(megaTemplateObj.templateObj_104)
    }
    compArray.push(megaTemplateObj.templateObj_150)
    compArray.push(megaTemplateObj.templateObj_150b)
    compArray.push(megaTemplateObj.templateObj_151)
    compArray.push(megaTemplateObj.templateObj_152)
    compArray.push(megaTemplateObj.templateObj_153)
    compArray.push(megaTemplateObj.templateObj_154)
    compArray.push(megaTemplateObj.templateObj_155)
    //if (theme == 'unum'){
        compArray.push(megaTemplateObj.templateObj_156)
        compArray.push(megaTemplateObj.templateObj_157)
        compArray.push(megaTemplateObj.templateObj_157b)
        compArray.push(megaTemplateObj.templateObj_158)
    //}
    if (theme == 'colonial'){
        compArray.push(megaTemplateObj.templateObj_160)
        compArray.push(megaTemplateObj.templateObj_161)
        compArray.push(megaTemplateObj.templateObj_161b)
        compArray.push(megaTemplateObj.templateObj_162)
        compArray.push(megaTemplateObj.templateObj_163)
    }
    compArray.push(megaTemplateObj.templateObj_200)
    compArray.push(megaTemplateObj.templateObj_201)
    compArray.push(megaTemplateObj.templateObj_201c)
    compArray.push(megaTemplateObj.templateObj_202)
    compArray.push(megaTemplateObj.templateObj_203)
    compArray.push(megaTemplateObj.templateObj_204)
    compArray.push(megaTemplateObj.templateObj_204e)
    compArray.push(megaTemplateObj.templateObj_204i)
    compArray.push(megaTemplateObj.templateObj_205)
    compArray.push(megaTemplateObj.templateObj_205e)
    compArray.push(megaTemplateObj.templateObj_206)
    compArray.push(megaTemplateObj.templateObj_207)
    compArray.push(megaTemplateObj.templateObj_207b)
    compArray.push(megaTemplateObj.templateObj_208)
    compArray.push(megaTemplateObj.templateObj_208b)
    compArray.push(megaTemplateObj.templateObj_209)
    compArray.push(megaTemplateObj.templateObj_210)
    compArray.push(megaTemplateObj.templateObj_211)
    compArray.push(megaTemplateObj.templateObj_212)
    compArray.push(megaTemplateObj.templateObj_213)
    compArray.push(megaTemplateObj.templateObj_214)
    compArray.push(megaTemplateObj.templateObj_215)
    compArray.push(megaTemplateObj.templateObj_216)
    compArray.push(megaTemplateObj.templateObj_217)
    if (theme == 'unum'){
        compArray.push(megaTemplateObj.templateObj_300)
        compArray.push(megaTemplateObj.templateObj_301)
        compArray.push(megaTemplateObj.templateObj_302)
        compArray.push(megaTemplateObj.templateObj_302s)
    }
    if (theme == 'colonial'){
        compArray.push(megaTemplateObj.templateObj_320)
        compArray.push(megaTemplateObj.templateObj_320s)
        compArray.push(megaTemplateObj.templateObj_321)
        compArray.push(megaTemplateObj.templateObj_321s)
        compArray.push(megaTemplateObj.templateObj_340)
        compArray.push(megaTemplateObj.templateObj_341)
    }

    
    
    

    const targetRenderElementHeaders = document.querySelector('#compListAreaHeaders')
    targetRenderElementHeaders.innerHTML = '' // clear it first

    const targetRenderElementBanners = document.querySelector('#compListAreaBanners')
    targetRenderElementBanners.innerHTML = '' // clear it first
    
    const targetRenderElementBody = document.querySelector('#compListAreaBody')
    targetRenderElementBody.innerHTML = '' // clear it first
    
    const targetRenderElementFooters = document.querySelector('#compListAreaFooters')
    targetRenderElementFooters.innerHTML = '' // clear it first

    //console.log('compArray:', compArray)

    for (let i = 0; i < compArray.length; ++i) {
        let comp = compArray[i]
        let targetRenderElement = null
        if (comp.category.toLowerCase() == 'headers'){
            targetRenderElement = targetRenderElementHeaders
        }
        if (comp.category.toLowerCase() == 'banners'){
            targetRenderElement = targetRenderElementBanners
        }
        if (comp.category.toLowerCase() == 'body'){
            targetRenderElement = targetRenderElementBody
        }
        if (comp.category.toLowerCase() == 'footer'){
            targetRenderElement = targetRenderElementFooters
        }

        let cDiv = document.createElement("div")
        cDiv.className = 'compListItem'

        // perhaps add compTag here
        if ( compCategory1col.includes(compArray[i].templateId) ){
            cDiv.className += ' compTag1col'
        }
        if ( compCategory2col.includes(compArray[i].templateId) ){
            cDiv.className += ' compTag2col'
        }
        if ( compCategoryAlignedLeft.includes(compArray[i].templateId) ){
            cDiv.className += ' compTagAlignedLeft'
        }
        if ( compCategoryAlignedCenter.includes(compArray[i].templateId) ){
            cDiv.className += ' compTagAlignedCenter'
        }



        targetRenderElement.appendChild(cDiv)
            // let att = document.createAttribute("onclick");
            // att.value = 'handlers.clickAddtoEmail('+compArray[i].templateId+')';
            // cDiv.setAttributeNode(att);
            let att = document.createAttribute("data-emailtemplate");
            att.value = compArray[i].templateId;
            cDiv.setAttributeNode(att);

        let cDivForLabel = document.createElement("div")
        cDivForLabel.className = 'compLabel'
        // if (comp.templateDesc2 != null && comp.templateDesc2 != undefined){
        //     cDivForLabel.innerHTML = comp.templateDesc2
        // }
        // else{
            cDivForLabel.innerHTML = comp.templateDesc
        // }
        cDiv.appendChild(cDivForLabel);

        let cDivForHtml = document.createElement("div")
        cDivForHtml.className = 'compHtml'
        let mergedCode = null
        if (theme == 'unum'){

            document.querySelector('.colorPickerRowUnum').classList.remove('hideme')
            document.querySelector('.colorPickerRowColonial').classList.add('hideme')

            mergedCode = mergeDataIntoPlaceholders(comp.baseCode, comp.defaultUnumDataObj)
            let select = document.querySelector('#t100_presetDD')
            select.options.length = 0; // clear
            select.options[0] = new Option('unum_logo-white_bg-color', 'unum_logo-white_bg-color');
            select.options[1] = new Option('unum_logo-color_bg-white', 'unum_logo-color_bg-white');

            select = document.querySelector('#t101_presetDD')
            select.options.length = 0; // clear
            select.options[0] = new Option('unum_logo-white_bg-color', 'unum_logo-white_bg-color');
            select.options[1] = new Option('unum_logo-color_bg-white', 'unum_logo-color_bg-white');

            select = document.querySelector('#t102_presetDD')
            select.options.length = 0; // clear
            select.options[0] = new Option('unum_logo-white_bg-color', 'unum_logo-white_bg-color');
            select.options[1] = new Option('unum_logo-color_bg-white', 'unum_logo-color_bg-white');

            select = document.querySelector('#t103_presetDD')
            select.options.length = 0; // clear
            select.options[0] = new Option('unum_logo-white_bg-color', 'unum_logo-white_bg-color');
            select.options[1] = new Option('unum_logo-color_bg-white', 'unum_logo-color_bg-white');
        }
        if (theme == 'colonial'){

            document.querySelector('.colorPickerRowUnum').classList.add('hideme')
            document.querySelector('.colorPickerRowColonial').classList.remove('hideme')

            mergedCode = mergeDataIntoPlaceholders(comp.baseCode, comp.defaultColonialDataObj)
            let select = document.querySelector('#t100_presetDD')
            select.options.length = 0; // clear
            select.options[0] = new Option('colonial_logo-white_bg-color', 'colonial_logo-white_bg-color');
            select.options[1] = new Option('colonial_logo-color_bg-white', 'colonial_logo-color_bg-white');

            select = document.querySelector('#t101_presetDD')
            select.options.length = 0; // clear
            select.options[0] = new Option('colonial_logo-white_bg-color', 'colonial_logo-white_bg-color');
            select.options[1] = new Option('colonial_logo-color_bg-white', 'colonial_logo-color_bg-white');

            select = document.querySelector('#t102_presetDD')
            select.options.length = 0; // clear
            select.options[0] = new Option('colonial_logo-white_bg-color', 'colonial_logo-white_bg-color');
            select.options[1] = new Option('colonial_logo-color_bg-white', 'colonial_logo-color_bg-white');

            select = document.querySelector('#t103_presetDD')
            select.options.length = 0; // clear
            select.options[0] = new Option('colonial_logo-white_bg-color', 'colonial_logo-white_bg-color');
            select.options[1] = new Option('colonial_logo-color_bg-white', 'colonial_logo-color_bg-white');

        }

        cDivForHtml.innerHTML = mergedCode
        cDiv.appendChild(cDivForHtml);
    }

    // refresh tooltips
    $('.cpTooltip').tooltipster('content', $('#tooltip_content_all'));

    document.querySelector('#editor').classList.remove('hideme')
    //$('#accord-headers').click();

    
    // scale container height to match scaled comp
    let allPreviewContainers = document.querySelectorAll('.compListItem')
    for (let i=0; i<allPreviewContainers.length; i++){
        allPreviewContainers[i].style.maxHeight = (allPreviewContainers[i].clientHeight*.55)+15+'px'
    }


    // now build filter arrays with combinations (this helps make filtering buttons work faster)
    bannerArrayAll = $('#compListAreaBanners .compListItem').toArray()
    bannerArrayCol1 = $('#compListAreaBanners .compTag1col').toArray()
    bannerArrayCol2 = $('#compListAreaBanners .compTag2col').toArray()
    bannerArrayAlignLeft = $('#compListAreaBanners .compTagAlignedLeft').toArray()
    bannerArrayAlignCenter = $('#compListAreaBanners .compTagAlignedCenter').toArray()

    // now get the body versions...
    bodyArrayAll = $('#compListAreaBody .compListItem').toArray()
    bodyArrayCol1 = $('#compListAreaBody .compTag1col').toArray()
    bodyArrayCol2 = $('#compListAreaBody .compTag2col').toArray()
    bodyArrayAlignLeft = $('#compListAreaBody .compTagAlignedLeft').toArray()
    bodyArrayAlignCenter = $('#compListAreaBody .compTagAlignedCenter').toArray()

    // let's try a non-jQuery version of the click handling
    var allFilterRadioButtons = document.getElementsByClassName("filterCB");
    for(i=0;i<allFilterRadioButtons.length;i++){
        allFilterRadioButtons[i].addEventListener('click', filterButtonClickEvent2, false);
    }

    // set the filter count default values
    document.querySelector('#filterCountShowingBanners').innerHTML = bannerArrayAll.length
    document.querySelector('#filterCountTotalBanners').innerHTML = bannerArrayAll.length
    document.querySelector('#filterCountShowingBody').innerHTML = bodyArrayAll.length
    document.querySelector('#filterCountTotalBody').innerHTML = bodyArrayAll.length


} // themeChange()


// filterfilter
// refactored filter button logic
function filterAction(el){ // this first part sets 1) the visual part of the buttons and; 2) the data state in the html data attributes
    //console.log('welcome to filterAction(el)...', el)
    const imgPath = './images/filters/'
    const thisFilterGroup = document.querySelectorAll('.'+el.dataset.filtergroup)

    // do stuff only if the clicked button wasn't already active
    if (el.dataset.active != 'active'){
        thisFilterGroup.forEach((button, i) => {
            // the clicked button was inactive before, so make it active and the rest in the group inactive
            if (button == el){
                button.dataset.active = 'active'
            }
            else{
                button.dataset.active = 'inactive'
            }

            // now match the image to the active/inactive state
            let btnImg = document.querySelector('#'+button.dataset.img)
            
            if (button.dataset.active == 'active'){
                btnImg.src = imgPath + button.dataset.activeimage
            }
            else{
                btnImg.src = imgPath + button.dataset.inactiveimage
            }
        });
        applyNewFilter(el.dataset.filtergroup)
    }
}

function applyNewFilter(group){  // this second part of the filter logic hides/shows the components based on the new state
    //console.log('welcome to applyNewFilter(group, btnGroupDataState)...', group, btnGroupDataState)
    let allCompPreviewsInSection = []
    let allCol1PreviewsInSection = []
    let allCol2PreviewsInSection = []
    let allAlignLeftPreviewsInSection = []
    let allAlignCenterPreviewsInSection = []
    let btnDataStateGroupA = [false, false, false] // the col filter buttons on the left
    let btnDataStateGroupB = [false, false, false] // the align filter buttons on the right

    if (group == 'filtergroup1' || group == 'filtergroup2'){ // filterBanners
        allCompPreviewsInSection = bannerArrayAll
        allCol1PreviewsInSection = bannerArrayCol1
        allCol2PreviewsInSection = bannerArrayCol2
        allAlignLeftPreviewsInSection = bannerArrayAlignLeft
        allAlignCenterPreviewsInSection = bannerArrayAlignCenter
        filterTotalCount = allCompPreviewsInSection.length

        // build the btnDataStateGroupA and B
        let groupA_els = document.querySelectorAll('.filtergroup1')
        groupA_els.forEach((button, i) => {
            if (button.dataset.active == 'active'){
                btnDataStateGroupA[i] = true
            }
        });
        let groupB_els = document.querySelectorAll('.filtergroup2')
        groupB_els.forEach((button, i) => {
            if (button.dataset.active == 'active'){
                btnDataStateGroupB[i] = true
            }
        });
    }
    if (group == 'filtergroup3' || group == 'filtergroup4'){ // filterBody
        allCompPreviewsInSection = bodyArrayAll
        allCol1PreviewsInSection = bodyArrayCol1
        allCol2PreviewsInSection = bodyArrayCol2
        allAlignLeftPreviewsInSection = bodyArrayAlignLeft
        allAlignCenterPreviewsInSection = bodyArrayAlignCenter
        filterTotalCount = allCompPreviewsInSection.length

        // build the btnDataStateGroupA and B
        let groupA_els = document.querySelectorAll('.filtergroup3')
        groupA_els.forEach((button, i) => {
            if (button.dataset.active == 'active'){
                btnDataStateGroupA[i] = true
            }
        });
        let groupB_els = document.querySelectorAll('.filtergroup4')
        groupB_els.forEach((button, i) => {
            if (button.dataset.active == 'active'){
                btnDataStateGroupB[i] = true
            }
        });
    }

    let workingArray = allCompPreviewsInSection.slice(0);  // makes a copy of an array instead of a reference to it

    // start by showing all
    workingArray.map( function(item) {
        $(item).show();
    })

    function filterDown(sourceArray, toRemoveArray){
        // http://2ality.com/2015/01/es6-set-operations.html
        let a = new Set(toRemoveArray);
        let b = new Set(sourceArray);
        let intersection = new Set([...a].filter(x => b.has(x))); // all of a that are also in b
        Array.from(intersection).map( function(item) {
            $(item).hide();
        })
        // now make the sourceArray everything else
        let q = new Set(sourceArray);
        let r = new Set(Array.from(intersection));
        let difference = new Set([...q].filter(x => !r.has(x))); // all of q that are not in r
        sourceArray = Array.from(difference).slice(0);
        return sourceArray
    }

    if (btnDataStateGroupA[0]){ // 1-col == true so remove 2-col
        workingArray = filterDown(workingArray, allCol2PreviewsInSection)
    }
    if (btnDataStateGroupA[1]){ // 2-col == true so remove 1-col
        workingArray = filterDown(workingArray, allCol1PreviewsInSection)
    }

    if (btnDataStateGroupB[0]){ // align-center == true so remove left
        workingArray = filterDown(workingArray, allAlignLeftPreviewsInSection)
    }
    if (btnDataStateGroupB[1]){ // align-left == true so remove center
        workingArray = filterDown(workingArray, allAlignCenterPreviewsInSection) 
    }
}
// end of refactored filter logic





function preset156(val){
    let activeTheme = document.querySelector('#t10_EmailThemeDD').value
    if (val == 'inverse'){
        if (activeTheme == 'unum'){
            document.querySelector('#t156_backgroundColor').value = '#015294'
            document.querySelector('#t156_h1TextColor').value = 'white'
        }
        if (activeTheme == 'colonial'){
            document.querySelector('#t156_backgroundColor').value = '#145481'
            document.querySelector('#t156_h1TextColor').value = 'white'
        }
    }
    if (val == 'normal'){
        if (activeTheme == 'unum'){
            document.querySelector('#t156_backgroundColor').value = '#f7f7f7'
            document.querySelector('#t156_h1TextColor').value = '#015294'
        }
        if (activeTheme == 'colonial'){
            document.querySelector('#t156_backgroundColor').value = '#f7f7f7'
            document.querySelector('#t156_h1TextColor').value = '#145481'
        }
        
    }
    handlers.goSavet156()
}

function preset157(val){
    let activeTheme = document.querySelector('#t10_EmailThemeDD').value
    if (val == 'inverse'){
        if (activeTheme == 'unum'){
            document.querySelector('#t157_backgroundColor').value = '#015294'
            document.querySelector('#t157_h1TextColor').value = 'white'
            document.querySelector('#t157_ctaBackgroundColor').value = 'white'
            document.querySelector('#t157_ctaTextColor').value = '#015294'
        }
        if (activeTheme == 'colonial'){
            document.querySelector('#t157_backgroundColor').value = '#145481'
            document.querySelector('#t157_h1TextColor').value = 'white'
            document.querySelector('#t157_ctaBackgroundColor').value = 'white'
            document.querySelector('#t157_ctaTextColor').value = '#145481'
        }
    }
    if (val == 'normal'){
        if (activeTheme == 'unum'){
            document.querySelector('#t157_backgroundColor').value = '#f7f7f7'
            document.querySelector('#t157_h1TextColor').value = '#015294'
            document.querySelector('#t157_ctaBackgroundColor').value = '#015294'
            document.querySelector('#t157_ctaTextColor').value = 'white'
        }
        if (activeTheme == 'colonial'){
            document.querySelector('#t157_backgroundColor').value = '#f7f7f7'
            document.querySelector('#t157_h1TextColor').value = '#145481'
            document.querySelector('#t157_ctaBackgroundColor').value = '#145481'
            document.querySelector('#t157_ctaTextColor').value = 'white'
        }
        
    }
    handlers.goSavet157()
}

function preset157b(val){
    let activeTheme = document.querySelector('#t10_EmailThemeDD').value
    if (val == 'inverse'){
        if (activeTheme == 'unum'){
            document.querySelector('#t157b_backgroundColor').value = '#015294'
            document.querySelector('#t157b_h1TextColor').value = 'white'
            document.querySelector('#t157b_ctaBackgroundColor').value = 'white'
            document.querySelector('#t157b_ctaTextColor').value = '#015294'
        }
        if (activeTheme == 'colonial'){
            document.querySelector('#t157b_backgroundColor').value = '#145481'
            document.querySelector('#t157b_h1TextColor').value = 'white'
            document.querySelector('#t157b_ctaBackgroundColor').value = 'white'
            document.querySelector('#t157b_ctaTextColor').value = '#145481'
        }
    }
    if (val == 'normal'){
        if (activeTheme == 'unum'){
            document.querySelector('#t157b_backgroundColor').value = '#f7f7f7'
            document.querySelector('#t157b_h1TextColor').value = '#015294'
            document.querySelector('#t157b_ctaBackgroundColor').value = '#015294'
            document.querySelector('#t157b_ctaTextColor').value = 'white'
        }
        if (activeTheme == 'colonial'){
            document.querySelector('#t157b_backgroundColor').value = '#f7f7f7'
            document.querySelector('#t157b_h1TextColor').value = '#145481'
            document.querySelector('#t157b_ctaBackgroundColor').value = '#145481'
            document.querySelector('#t157b_ctaTextColor').value = 'white'
        }
        
    }
    handlers.goSavet157b()
}

function preset158(val){
    let activeTheme = document.querySelector('#t10_EmailThemeDD').value
    if (val == 'inverse'){
        if (activeTheme == 'unum'){
            document.querySelector('#t158_backgroundColor').value = '#015294'
            document.querySelector('#t158_h1TextColor').value = 'white'
        }
        if (activeTheme == 'colonial'){
            document.querySelector('#t158_backgroundColor').value = '#145481'
            document.querySelector('#t158_h1TextColor').value = 'white'
        }
    }
    if (val == 'normal'){
        if (activeTheme == 'unum'){
            document.querySelector('#t158_backgroundColor').value = '#f7f7f7'
            document.querySelector('#t158_h1TextColor').value = '#015294'
        }
        if (activeTheme == 'colonial'){
            document.querySelector('#t158_backgroundColor').value = '#f7f7f7'
            document.querySelector('#t158_h1TextColor').value = '#145481'
        }
        
    }
    handlers.goSavet158()
}


// console.log(array_move([1, 2, 3], 0, 1)); 
// returns [2, 1, 3]
function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
};
function getCompWithMatchingId(num){
    for (let i = 0; i < main.comps.length; ++i) {
        if (main.comps[i].id == num){
            return main.comps[i]
        }
    }
}
function getPositionOfComp(num){
    for (let i = 0; i < main.comps.length; ++i) {
        if (main.comps[i].id == num){
            return i
        }
    }
}
function getSelectedComp(){
    for (let i = 0; i < main.comps.length; ++i) {
        if (main.comps[i].selected){
            return main.comps[i]
        }
    }
}


function isOdd(num) { return num % 2;}
function pickColor(el){
    let selectedColor = el.value
    document.querySelector('#'+main.colorPickerInputId).value = selectedColor
    document.querySelector('#'+main.colorPickerId).style.backgroundColor = selectedColor
    document.querySelector('body').click() // closes the tooltip popup
}


function prepForTextArea(s){
    let prepArray = s.split('|')
    let prepArrayLength = prepArray.length

    let displayString = ''
    prepArray.map( (item, i) => {
        displayString += item
        if (i < prepArrayLength-1){ // don't add on the last one
            displayString += '|\n\n'
        }
    })
    return displayString.trim()
}


function mergeDataIntoPlaceholders(templateBaseCode, templateDataObj){
    // the input data is not needed because it's assumed to already be saved into the templateDataObj
    // to merge correctly, the fields in the dataObj need to match the names of the placeholder middle. birch_thispart_birch
    //console.log('Welcome to mergeDataIntoPlaceholdersNEW(templateBaseCode, templateDataObj)...')
    //console.log('Received templateBaseCode = ', templateBaseCode);
    //console.log('Received templateDataObj = ', templateDataObj);

    // plan:  loop through the templateDataObj to find placeholder names
    //        for each matching placholder in templateBaseCode, swap in real data
    let templateBaseCodeMerged = templateBaseCode
    const templateDataObjEntries = Object.entries(templateDataObj)

    function prepRepeatableFieldForMerge(fieldData, codeSnippetToRepeat){
        let s = ''
        let fieldDataArray = fieldData.split('|')
        let dataCount = fieldDataArray.length
        // build a string with as many are needed from the data input
        for (let i=0; i<dataCount; i++){
            s+=codeSnippetToRepeat
            if (i<dataCount-1){
                s+='\n'
            }
        }
        return s
    }

    // merge 1: merge normal data and also insert placeholders that live in the normal data
    for (const [fieldLabel, fieldData] of templateDataObjEntries) {
        //console.log(`fieldLabel:${fieldLabel} -  fieldData:${fieldData}`)
        // this works for any comp with 1) birch_ctaCode_birch in the template; and 2) ctaCode in it's dataObject

        // 100, 102, 104 (makes 103 obsolete)
        if (fieldLabel === 'ctaLinkCode'){   // REMEMBER this are fields on the data object!
            if (templateDataObj.ctaText == ''){ // exclude the cta
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaLinkCode_birch`, '')
            }
            else if (templateDataObj.ctaUrl == ''){ // no link, just text
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaLinkCode_birch`, templateDataObj.ctaText)
            }
            else{ // include the full cta link
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaLinkCode_birch`, templateDataObj.ctaLinkCode)
                // now merge the data into the cta placeholders
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaTextColor_birch`, templateDataObj.ctaTextColor)
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaUrl_birch`, templateDataObj.ctaUrl)
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaText_birch`, templateDataObj.ctaText)
            }
        }

        // 205
        if (fieldLabel === 'listItemsAsString'){  // REMEMBER this are fields on the data object!
            let fieldDataArray = fieldData.split('|')
            let dataCount = fieldDataArray.length
            let s = prepRepeatableFieldForMerge(fieldData, templateDataObj.listItemsAsStringCode)
            // loop again to merge into each repeated field
            for (let i=0; i<dataCount; i++){
                s=s.replace(`birch_listItemsAsStringItem_birch`, fieldDataArray[i])
            }
            templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_${fieldLabel}_birch`, s)
        }

        // 205e
        if (fieldLabel === 'bulletTextList'){   // REMEMBER this are fields on the data object!
            let fieldDataArray = fieldData.split('|')
            let dataCount = fieldDataArray.length
            let s = prepRepeatableFieldForMerge(fieldData, templateDataObj.bulletCode)
            let bulletImgDataArray = templateDataObj.bulletImageList.split('|')
            // loop again to merge into each repeated field
            for (let i=0; i<dataCount; i++){
                s=s.replace(`birch_repeatingImgUrl_birch`, bulletImgDataArray[i])
                s=s.replace(`birch_repeatingImgText_birch`, fieldDataArray[i])
            }
            templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_${fieldLabel}_birch`, s)
        }

        // this works for any comp with 1) birch_ctaCode_birch in the template; and 2) ctaCode in it's dataObject
        if (fieldLabel === 'ctaCode'){   // REMEMBER this are fields on the data object!
            if (templateDataObj.ctaText == ''){ // exclude the cta
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaCode_birch`, '')
            }
            else{ // include the cta
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaCode_birch`, templateDataObj.ctaCode)
                // now merge the data into the cta placeholders
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaBackgroundColor_birch`, templateDataObj.ctaBackgroundColor)
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaTextColor_birch`, templateDataObj.ctaTextColor)
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaUrl_birch`, templateDataObj.ctaUrl)
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaText_birch`, templateDataObj.ctaText)
            }
        }

        // special situation for 217 which has two ctas
        if (fieldLabel === 'ctaCode1'){   // REMEMBER this are fields on the data object!
            if (templateDataObj.ctaText1 == ''){ // exclude the cta
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaCode1_birch`, '')
            }
            else{ // include the cta
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaCode1_birch`, templateDataObj.ctaCode1)
                // now merge the data into the cta placeholders
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaBackgroundColor1_birch`, templateDataObj.ctaBackgroundColor1)
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaTextColor1_birch`, templateDataObj.ctaTextColor1)
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaUrl1_birch`, templateDataObj.ctaUrl1)
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaText1_birch`, templateDataObj.ctaText1)
            }
            if (templateDataObj.ctaText2 == ''){ // exclude the cta
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaCode2_birch`, '')
            }
            else{ // include the cta
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaCode2_birch`, templateDataObj.ctaCode2)
                // now merge the data into the cta placeholders
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaBackgroundColor2_birch`, templateDataObj.ctaBackgroundColor2)
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaTextColor2_birch`, templateDataObj.ctaTextColor2)
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaUrl2_birch`, templateDataObj.ctaUrl2)
                templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_ctaText2_birch`, templateDataObj.ctaText2)
            }
        }

        else{ // do a normal merge (ones without repeatable fields)
            templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_${fieldLabel}_birch`, fieldData)
        }
    }
    //console.log('\n\nPost merge1 templateBaseCodeMerged:', templateBaseCodeMerged);

    // merge 2: merge again to populate placeholders that arrived from the data of merge1
    for (const [fieldLabel, fieldData] of templateDataObjEntries) {
        //console.log(`fieldLabel:${fieldLabel} -  fieldData:${fieldData}`)
        templateBaseCodeMerged = templateBaseCodeMerged.replace(`birch_${fieldLabel}_birch`, fieldData)
    }
    //console.log('\n\nPost merge2 templateBaseCodeMerged:', templateBaseCodeMerged);



    return templateBaseCodeMerged
    

}



function mergeDataIntoPlaceholdersX(templateHtml, dataObj){

    // call our new test function
    mergeDataIntoPlaceholdersNEW(templateHtml, dataObj)

    // mergeDataIntoPlaceholders(template, dataObj)
    // comp.baseCode, comp.defaultUnumDataObj
    // template is the baseCode from the template variable
    // dataObj is the defaultUnumDataObj of the same template which is an obj of each placeholder

    //  console.log('welcome to mergeDataIntoPlaceholders...')
    //  console.log('received templateHtml: ', templateHtml)
    //  console.log('received obj: ', dataObj)
    let html = templateHtml
    //let dataObj = comp.defaultUnumDataObj

    for (var key in dataObj) {
        if (dataObj.hasOwnProperty(key)) {
            // console.log(key + " -> " + dataObj[key]);
            // https://flaviocopes.com/how-to-replace-all-occurrences-string-javascript/
            const tokens = html.split(`birch_${key}_birch`)
            //console.log('tokens = ', tokens);
            

            // tokens.length = 1 (0 matches found)
            // tokens.length = 2 (1 matches found)
            // tokens.length = 3 (2 matches found)
            // tokens.length = 4 (3 matches found)
            
            // loop to build a join statement that inserts
            if (tokens.length >= 2){ // at least one match
                let loopDuration = tokens.length + (tokens.length-1) // total tokens + total matches
                let tokenIndex = 0;
                let tokensWithInsertedValues = []
                for (let x=0; x<loopDuration; x++){
                    if (isOdd(x)){
                        //console.log('the key is ', key)
                        if (key === 'listItemsAsString'){   
                            let liArray = dataObj[key].split('|')
                            let liAsString = liArray.map( item => '<li class="birch-text-styles-li" style="font-family: Arial; font-size: 17px; font-style: normal; font-weight: 400; line-height: 22px">'+item+'</li>').join('')
                            tokensWithInsertedValues.push(liAsString)
                        }
                        else if (key === 'birch_dynamicH1code204_birch'){
                            console.log('i see birch_dynamicH1code204_birch!!!');
                            
                        }
                        else if (key === 'bulletTextList'){ 
                            let liImgDelimitedString = dataObj['bulletImageList']
                            let liImgArray = liImgDelimitedString.split('|')
                            
                            let liArray = dataObj[key].split('|')
                            let liAsString = liArray.map( (item, i) => `<table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; position: relative; text-align: left; vertical-align: top; width: 100%;"><tbody><tr style="padding: 0; text-align: left; vertical-align: top;">
                    <th class="small-2 large-1 columns first" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 0; padding-right: 0; text-align: left; width: 58px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;"><img src="${liImgArray[i] != null ? liImgArray[i] : 'https://github.com/unumux/birch-builder-2/blob/master/images/components/cl-checkmark.png?raw=true'}" class="birch-min-width-25" alt="" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; min-width: 25px; outline: none; text-decoration: none; width: auto;"></th></tr></table></th><!--  continue here -->
                    <th class="small-10 large-11 columns last" style="Margin: 0 auto; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0 auto; padding: 0; padding-bottom: 16px; padding-left: 0; padding-right: 0; text-align: left; width: 558px;"><table style="border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%;"><tr style="padding: 0; text-align: left; vertical-align: top;"><th style="Margin: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left;"><p class="birch--bulletTextColor" style="Margin: 0; Margin-bottom: 10px; color: birch_bulletTextColor_birch; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; margin-bottom: 10px; padding: 0; text-align: left;">${liArray[i] != null ? liArray[i] : ''}</p></th></tr></table></th>
                </tr></tbody></table>`).join('')
                            tokensWithInsertedValues.push(liAsString)
                        }
                        else{
                            tokensWithInsertedValues.push(dataObj[key])
                        }
                    }
                    else{ // even
                        tokensWithInsertedValues.push(tokens[tokenIndex])
                        tokenIndex++
                    }
                }
                html = tokensWithInsertedValues.join('')
            }

        }
    }
    return html
}




// toggle edit mode
function compNav(el){
    //console.log(el.id)
    let tab1 = document.querySelector('#compnav1')
    let tab2 = document.querySelector('#compnav2')
    let tab1panel = document.querySelector('#components-panel1')
    let tab2panel = document.querySelector('#components-panel2')
    if (el.id == 'compnav2'){ // switch to edit mode for a comp
        tab1.classList.remove('components-nav-active')
        tab2.classList.add('components-nav-active')
        tab1panel.classList.add('hideme')
        tab2panel.classList.remove('hideme')
    }
    else{ // switch to add-a-component mode
        tab1.classList.add('components-nav-active')
        tab2.classList.remove('components-nav-active')
        tab1panel.classList.remove('hideme')
        tab2panel.classList.add('hideme')
    }
}


// intro
function startFromScratch(themeChoice){
    document.querySelector('#introAll').classList.add('hideme')
    document.querySelector('#main').classList.remove('hideme')
    document.querySelector('#navBtnPreview').classList.remove('hideme')
    document.querySelector('#navBtnCopy').classList.remove('hideme')
    document.querySelector('#navBtnNew').classList.remove('hideme')
    document.querySelector('#navBtnExport').classList.remove('hideme')
    document.querySelector('body').classList.add('scrollFreeze')
    document.querySelector('#t10_EmailThemeDD [value="unum"]').selected = true;
    if (themeChoice == 'unum'){
        themeChange('unum')
    }
    if (themeChoice == 'colonial'){
        themeChange('colonial')
    }
    document.querySelector('#compnav1').click() // switch to choose component layout
    // document.querySelector('#accordHeader1').click() // open email settings by default
    document.querySelector('#accord-headers').click() // open email settings by default

}
function chooseIntroTemplate(num=0){
    //console.log('Welcome to chooseIntroTemplate...num=', num)
    document.querySelector('#introAll').classList.add('hideme')
    document.querySelector('#main').classList.remove('hideme')
    document.querySelector('#navBtnPreview').classList.remove('hideme')
    document.querySelector('#navBtnCopy').classList.remove('hideme')
    document.querySelector('#navBtnNew').classList.remove('hideme')
    document.querySelector('#navBtnExport').classList.remove('hideme')

    document.querySelector('body').classList.add('scrollFreeze')

    if (num == 1){
        document.querySelector('#t10_EmailThemeDD [value="unum"]').selected = true;
        themeChange('unum')
        main.addComp('templateObj_90')  // emailCompId0
        main.addComp('templateObj_102') // emailCompId1
        main.addComp('templateObj_154') // emailCompId2
        main.addComp('templateObj_216') // emailCompId3
        main.addComp('templateObj_213') // emailCompId4
        main.addComp('templateObj_200') // emailCompId5
        main.addComp('templateObj_300') // emailCompId6
        let selectedComp = document.querySelector('#emailCompId3')
        // handlers.clickCompInEmail(event, selectedComp)
        selectedComp.click()
        document.querySelector('#t216_backgroundColor').value = 'white'
        handlers.goSavet216()

        selectedComp = document.querySelector('#emailCompId5')
        // handlers.clickCompInEmail(event, selectedComp)
        selectedComp.click()
        document.querySelector('#t200_backgroundColor').value = 'white'
        handlers.goSavet200()

        // handlers.clickCompInEmail(event, selectedComp) // unselect
        selectedComp.click() // unselect
        $("#emailComponentsArea").animate({ scrollTop: 0 }, 0); // scroll to top of email
    }
    if (num == 2){
        document.querySelector('#t10_EmailThemeDD [value="unum"]').selected = true;
        themeChange('unum')
        main.addComp('templateObj_90')  // emailCompId0
        main.addComp('templateObj_102') // emailCompId1
        main.addComp('templateObj_155') // emailCompId2
        main.addComp('templateObj_201') // emailCompId3
        main.addComp('templateObj_211') // emailCompId4      
        main.addComp('templateObj_213') // emailCompId5
        main.addComp('templateObj_300') // emailCompId6
        let selectedComp = document.querySelector('#emailCompId3')
        // handlers.clickCompInEmail(event, selectedComp)
        selectedComp.click()
        document.querySelector('#t201_backgroundColor').value = 'white'
        handlers.goSavet201()

        selectedComp = document.querySelector('#emailCompId5')
        // handlers.clickCompInEmail(event, selectedComp)
        selectedComp.click()
        document.querySelector('#t213_backgroundColor').value = 'white'
        handlers.goSavet213()

        // handlers.clickCompInEmail(event, selectedComp) // unselect
        selectedComp.click() // unselect
        $("#emailComponentsArea").animate({ scrollTop: 0 }, 0); // scroll to top of email
    }
    if (num == 3){
        document.querySelector('#t10_EmailThemeDD [value="unum"]').selected = true;
        themeChange('unum')
        main.addComp('templateObj_90')  // emailCompId0
        main.addComp('templateObj_102') // emailCompId1
        main.addComp('templateObj_207') // emailCompId2
        main.addComp('templateObj_201') // emailCompId3
        main.addComp('templateObj_215') // emailCompId4      
        main.addComp('templateObj_300') // emailCompId6
        let selectedComp = document.querySelector('#emailCompId3')
        // handlers.clickCompInEmail(event, selectedComp)
        selectedComp.click()
        document.querySelector('#t201_backgroundColor').value = 'white'
        handlers.goSavet201()

        // handlers.clickCompInEmail(event, selectedComp) // unselect
        selectedComp.click() // unselect
        $("#emailComponentsArea").animate({ scrollTop: 0 }, 0); // scroll to top of email
    }
    if (num == 4){
        document.querySelector('#t10_EmailThemeDD [value="unum"]').selected = true;
        themeChange('unum')
        main.addComp('templateObj_90')  // emailCompId0
        main.addComp('templateObj_102') // emailCompId1
        main.addComp('templateObj_156') // emailCompId2 (inverse)
        main.addComp('templateObj_201') // emailCompId3
        main.addComp('templateObj_213') // emailCompId4      
        main.addComp('templateObj_216') // emailCompId5     
        main.addComp('templateObj_302') // emailCompId6
        let selectedComp = document.querySelector('#emailCompId3')
        // handlers.clickCompInEmail(event, selectedComp)
        selectedComp.click()
        document.querySelector('#t201_backgroundColor').value = 'white'
        handlers.goSavet201()

        selectedComp = document.querySelector('#emailCompId2')
        // handlers.clickCompInEmail(event, selectedComp)
        selectedComp.click()
        //document.querySelector('#t157_presetDD [value="inverse"]').selected = true;
        document.querySelector('#t156_backgroundColor').value = '#f7f7f7'
        document.querySelector('#t156_h1TextColor').value = '#015294'
        handlers.goSavet156()

        selectedComp = document.querySelector('#emailCompId5')
        // handlers.clickCompInEmail(event, selectedComp)
        selectedComp.click()
        document.querySelector('#t216_backgroundColor').value = 'white'
        handlers.goSavet216()

        // handlers.clickCompInEmail(event, selectedComp) // unselect
        selectedComp.click() // unselect
        $("#emailComponentsArea").animate({ scrollTop: 0 }, 0); // scroll to top of email
    }
    if (num == 5){
        document.querySelector('#t10_EmailThemeDD [value="colonial"]').selected = true;
        themeChange('colonial')

        main.addComp('templateObj_100')  // emailCompId0
        let targetEmailComp = document.querySelector('#emailCompId0')
        main.goEdit(targetEmailComp.dataset.compid, targetEmailComp) // edit mode also loads obj data
        document.querySelector('#t100_presetDD [value="colonial_logo-color_bg-white"]').selected = true;
        handlers.goSavet100()
        targetEmailComp.click() // exit edit screen

        main.addComp('templateObj_154') // emailCompId1
        main.addComp('templateObj_210') // emailCompId2
        targetEmailComp = document.querySelector('#emailCompId2')
        main.goEdit(targetEmailComp.dataset.compid, targetEmailComp) // edit mode also loads obj data
        document.querySelector('#t210_backgroundColor').value = 'white'
        handlers.goSavet210()
        targetEmailComp.click() // exit edit screen

        main.addComp('templateObj_205') // emailCompId3
        main.addComp('templateObj_200') // emailCompId4 
        targetEmailComp = document.querySelector('#emailCompId4')
        main.goEdit(targetEmailComp.dataset.compid, targetEmailComp) // edit mode also loads obj data
        document.querySelector('#t200_backgroundColor').value = 'white' 
        handlers.goSavet200()
        targetEmailComp.click() // exit edit screen

        main.addComp('templateObj_321') // emailCompId5 
        main.goUnselect()
        $("#emailComponentsArea").animate({ scrollTop: 0 }, 0); // scroll to top of email
    }
    if (num == 6){
        document.querySelector('#t10_EmailThemeDD [value="colonial"]').selected = true;
        themeChange('colonial')

        main.addComp('templateObj_100')  // emailCompId0
        let targetEmailComp = document.querySelector('#emailCompId0')
        main.goEdit(targetEmailComp.dataset.compid, targetEmailComp) // edit mode also loads obj data
        document.querySelector('#t100_presetDD [value="colonial_logo-color_bg-white"]').selected = true;
        handlers.goSavet100()
        targetEmailComp.click() // exit edit screen

        main.addComp('templateObj_155') // emailCompId1
        main.addComp('templateObj_202') // emailCompId2
        targetEmailComp = document.querySelector('#emailCompId2')
        main.goEdit(targetEmailComp.dataset.compid, targetEmailComp) // edit mode also loads obj data
        document.querySelector('#t202_backgroundColor').value = 'white'
        handlers.goSavet202()
        targetEmailComp.click() // exit edit screen

        main.addComp('templateObj_210') // emailCompId3
        main.addComp('templateObj_213') // emailCompId4 
        targetEmailComp = document.querySelector('#emailCompId4')
        main.goEdit(targetEmailComp.dataset.compid, targetEmailComp) // edit mode also loads obj data
        document.querySelector('#t213_backgroundColor').value = 'white'  
        handlers.goSavet213()
        targetEmailComp.click() // exit edit screen

        main.addComp('templateObj_321') // emailCompId5 
        main.goUnselect()
        $("#emailComponentsArea").animate({ scrollTop: 0 }, 0); // scroll to top of email
    }
    if (num == 7){
        document.querySelector('#t10_EmailThemeDD [value="colonial"]').selected = true;
        themeChange('colonial')

        main.addComp('templateObj_100')  // emailCompId0
        let targetEmailComp = document.querySelector('#emailCompId0')
        main.goEdit(targetEmailComp.dataset.compid, targetEmailComp) // edit mode also loads obj data
        document.querySelector('#t100_presetDD [value="colonial_logo-color_bg-white"]').selected = true;
        handlers.goSavet100()
        targetEmailComp.click() // exit edit screen

        main.addComp('templateObj_207b') // emailCompId1
        main.addComp('templateObj_201') // emailCompId2
        targetEmailComp = document.querySelector('#emailCompId2')
        main.goEdit(targetEmailComp.dataset.compid, targetEmailComp) // edit mode also loads obj data
        document.querySelector('#t201_backgroundColor').value = 'white'
        handlers.goSavet201()
        targetEmailComp.click() // exit edit screen

        main.addComp('templateObj_215') // emailCompId3
        main.addComp('templateObj_321') // emailCompId5 
        main.goUnselect()
        $("#emailComponentsArea").animate({ scrollTop: 0 }, 0); // scroll to top of email
    }
    if (num == 8){
        document.querySelector('#t10_EmailThemeDD [value="colonial"]').selected = true;
        themeChange('colonial')

        main.addComp('templateObj_100')  // emailCompId0
        let targetEmailComp = document.querySelector('#emailCompId0')
        main.goEdit(targetEmailComp.dataset.compid, targetEmailComp) // edit mode also loads obj data
        document.querySelector('#t100_presetDD [value="colonial_logo-color_bg-white"]').selected = true;
        handlers.goSavet100()
        targetEmailComp.click() // exit edit screen

        main.addComp('templateObj_156') // emailCompId1
        targetEmailComp = document.querySelector('#emailCompId1')
        main.goEdit(targetEmailComp.dataset.compid, targetEmailComp) // edit mode also loads obj data
        // //go inverse
        document.querySelector('#t156_presetDD [value="inverse"]').selected = true;
        document.querySelector('#t156_backgroundColor').value = '#f7f7f7'
        document.querySelector('#t156_h1TextColor').value = '#015294'
        handlers.goSavet156()
        targetEmailComp.click() // exit edit screen

        main.addComp('templateObj_200') // emailCompId2
        targetEmailComp = document.querySelector('#emailCompId2')
        main.goEdit(targetEmailComp.dataset.compid, targetEmailComp) // edit mode also loads obj data
        document.querySelector('#t200_backgroundColor').value = 'white'
        handlers.goSavet200()
        targetEmailComp.click() // exit edit screen

        main.addComp('templateObj_213') // emailCompId3
        main.addComp('templateObj_216') // emailCompId4
        targetEmailComp = document.querySelector('#emailCompId4')
        main.goEdit(targetEmailComp.dataset.compid, targetEmailComp) // edit mode also loads obj data
        document.querySelector('#t216_backgroundColor').value = 'white'
        handlers.goSavet216()
        targetEmailComp.click() // exit edit screen

        main.addComp('templateObj_321') // emailCompId5 
        main.goUnselect()
        $("#emailComponentsArea").animate({ scrollTop: 0 }, 0); // scroll to top of email
    }

    // document.querySelector('#accordHeader1').click() // open email settings by default
    document.querySelector('#accord-headers').click() // open email settings by default
}

// top navbar actions
function backToIntro(){  // using handlers.openInNewWindow() now instead...
    console.log('welcome to backToIntro()...')
    main.comps.length = 0;
    main.idCount = 0;
    document.querySelector('#emailCompListArea').innerHTML = '' // clear it first
    editor.getSession().setValue('');
    editor.renderer.updateFull();
    document.querySelector('#introAll').classList.remove('hideme')
    document.querySelector('#main').classList.add('hideme')
    document.querySelector('#navBtnPreview').classList.add('hideme')
    document.querySelector('#navBtnCopy').classList.add('hideme')
    document.querySelector('#navBtnNew').classList.add('hideme')

    document.querySelector('body').classList.remove('scrollFreeze')
    // close all open accordions
    let openAccordions = document.querySelectorAll('.accordion.open > .accord-header')
    for (let i = 0; i<openAccordions.length; i++){
        openAccordions[i].click()
    }
}


// lala
function exportEmail(){
    const entries = Object.entries(main.comps)  // make a loopable 'entries' from main.comps
    exportData = []
    exportObj = {}
    exportObj.version = version;
    exportObj.theme = document.querySelector('#t10_EmailThemeDD').value;
    exportObj.subjectline = document.querySelector('#t10_emailSubjectLine').value;
    exportObj.preheader = document.querySelector('#t10_emailPreheader').value;
    exportObj.emailBackgroundColor = document.querySelector('#t10_backgroundColor').value;
    
    exportObj.comps = {}
    
    for (const entry of entries) { // loop through main.comps converted to 'entries'
        let newEntryObj = {}
        newEntryObj.compId = entry[1].template.templateId
        newEntryObj.compData = entry[1].templateValuesObj
        exportData.push(newEntryObj)
        exportObj.comps= exportData
    }

    let blob = new Blob([JSON.stringify(exportObj)], {type: 'text/plain;charset=utf-8'});
    if (importedEmailFile == null){
        saveAs(blob, "birch_export.txt");
    }
    else{
        saveAs(blob, importedEmailFile);
    }
    
}


function handleFileSelect(evt) { // triggered from html input event
    var files = evt.target.files; // FileList object

    // Loop through the FileList which can have multiple selected items if you allow it
    for (var i = 0, f; f = files[i]; i++)
    {
        // Only process .txt files.
        if (!f.type.match('text/plain')) {
            continue;
        }

        main.fileName = f.name

        var reader = new FileReader();
        reader.onload = function(event)
        {
            // NOTE: event.target point to FileReader
            var contents = event.target.result;
            var lines = contents.split('\n');
            loadEmail(contents)
        };

        importedEmailFile = main.fileName  // to track if exporting later
        //console.log('importedEmailFile:',importedEmailFile)

        reader.readAsText(f);
    }
}

// https://stackoverflow.com/a/40876342/1735394
function loadEmail(theText){
    let dataFromSave = theText

    try {
        importObj = JSON.parse(dataFromSave);
        //console.log(importObj)
        //main.idCount = importObj.idCount
        //main.comps = eval(stuffObj.comps)
        //document.querySelector('.frame2').classList.add('hideme')
        //view.displayComponents();
        main.comps.length = 0;
        main.idCount = 0;
        document.querySelector('#emailCompListArea').innerHTML = '' // clear it first
        editor.getSession().setValue('');
        editor.renderer.updateFull();
        // if (importObj.version != '2.0'){
        if (importObj.version.substring(0,1) != '2'){
            alert ('Version 2 export file required.  This version does not import export files from 1.0.')
            return false;
        }
        if (importObj.theme == ""){
            importObj.theme = 'unum'
        }
        startFromScratch(importObj.theme)
        document.querySelector('#t10_EmailThemeDD').value = importObj.theme 
        document.querySelector('#t10_emailSubjectLine').value = importObj.subjectline
        document.querySelector('#t10_emailPreheader').value = importObj.preheader
        document.querySelector('#t10_backgroundColor').value = importObj.emailBackgroundColor
        document.querySelector('#t10_backgroundColorCP').style.backgroundColor = importObj.emailBackgroundColor

        // now let's load the components and their saved data
        importObj.comps.map( (comp, i) => {
            //console.log(comp.compId)
            main.addComp(comp.compId)

            
            const dataEntries = Object.entries(comp.compData)
            //console.log('dataEntries: ', dataEntries)

            let idsplit = comp.compId.split('_')
            

            dataEntries.map( (dataEntry, i) => {
                let fieldname = 't'+idsplit[1]+'_'+dataEntry[0]
                var myEle = document.getElementById(fieldname);
                if(myEle){
                    //console.log('located this '+fieldname+' ...loading '+dataEntry[1]+' from import...')
                    myEle.value = dataEntry[1]
                    //handlers.goSavet90()
                    eval('handlers.goSavet'+idsplit[1]+'()')
                }
                //console.log(fieldname)
            })

            $("#emailComponentsArea").click() // unselect
            $("#emailComponentsArea").animate({ scrollTop: 0 }, 0); // scroll to top of email

            //console.log(idsplit)
            // t90_backgroundColor
            // t90_linkColor
            // t90_linkUrl
            // t90_linkText
            // compData{backgroundColor: "white"...}
            // compId: "templateObj_90"
        })

        // if (importObj.theme == "unum"){
        //     startFromScratch('unum')
        // }
        // if (importObj.theme == "colonial"){
        //     startFromScratch('unum')
        // }
        //document.querySelector('#introAll').classList.remove('hideme')
        //document.querySelector('#main').classList.add('hideme')
        //document.querySelector('#navBtnPreview').classList.add('hideme')

    } catch (e) {
        alert('Error.  This file does not appear to be a valid email build save format.')
        console.log(e)
    }
}




// only used to insert the email subject and preheader
// this version only swaps the first located match
/*function swapMe(targetString, oldSubString, newSubString){
    let findIndex = -1;
    try {
        findIndex = targetString.indexOf(oldSubString);
        if (findIndex > -1){ // found something
            let stringBefore = targetString.substring(0,findIndex)
            let stringAfter = targetString.substring(findIndex+oldSubString.length)
            let combinedAfterSwap = stringBefore + newSubString + stringAfter
            return combinedAfterSwap
        }
        else{
            throw `!! swapMe error.  Did not find the substring.\nLooking for:\n${oldSubString}\nInside:\n${targetString}`
            //return false
        }
    }
    catch(e) { console.log(e); }
    return false
}*/

// new
/*function copyEmailCode(){
    let tempCode = editor.getValue()
    let tempEl = document.querySelector('#emailCodeTemp')
    tempEl.value = tempCode
    tempEl.select()
    document.execCommand('copy');

    let navCopyBtn = document.querySelector('#navBtnCopy')
    navCopyBtn.innerHTML = `<img src="images/check.svg" class="navIcon" alt=""> Copied`

    setTimeout(() => {
        navCopyBtn.innerHTML = `<img src="images/copy-code.svg" class="navIcon" alt=""> Copy code`
    }, 2000);
}*/


// one merge to rule them all
function mergeCodeWithDataForEdit(targetElementId){ // mergeCodeWithDataForEdit('#t90_mergedCode')
    let ourComp = getCompWithMatchingId(document.querySelector('#idOfComponentBeingEdited').value)
    document.querySelector(targetElementId).value = mergeDataIntoPlaceholders(ourComp.template.baseCode, ourComp.templateValuesObj)
}
function mergeCodeWithDataForEditShared(){ // mergeCodeWithDataForEdit('#t90_mergedCode')
    let ourComp = getCompWithMatchingId(document.querySelector('#idOfComponentBeingEdited').value)
    document.querySelector('#shared_mergedCode').value = mergeDataIntoPlaceholders(ourComp.template.baseCode, ourComp.templateValuesObj)
}



const baseEmailHtmlTop = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en" style="background: {{emailBackGroundColor}}; background: {{emailBackGroundColor}} !important">
  <head>
    
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width">
    <title>{{emailSubject}}</title>
    <style>
@media only screen {
  html {
    min-height: 100%;
    background: {{emailBackGroundColor}};
  }
}

@media only screen and (max-width: 616px) {
  .small-text-center {
    text-align: center !important;
  }
}

@media only screen and (max-width: 616px) {
  table.body table.container .show-for-large {
    display: none !important;
    width: 0;
    mso-hide: all;
    overflow: hidden;
  }
}

@media only screen and (max-width: 616px) {
  table.body img {
    width: auto;
    height: auto;
  }

  table.body center {
    min-width: 0 !important;
  }

  table.body .container {
    width: 95% !important;
  }

  table.body .columns {
    height: auto !important;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  table.body .collapse .columns {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  th.small-6 {
    display: inline-block !important;
    width: 50% !important;
  }

  th.small-12 {
    display: inline-block !important;
    width: 100% !important;
  }

  table.menu {
    width: 100% !important;
  }

  table.menu td,
  table.menu th {
    width: auto !important;
    display: inline-block !important;
  }

  table.menu.vertical td,
  table.menu.vertical th {
    display: block !important;
  }

  table.menu[align="center"] {
    width: auto !important;
  }

  table.button.small-expanded {
    width: 100% !important;
  }

  table.button.small-expanded table {
    width: 100%;
  }

  table.button.small-expanded table a {
    text-align: center !important;
    width: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}

@media only screen and (max-width: 616px) {
  .birch-headerbar-wrapper .wrapper-inner {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
}

@media only screen and (max-width: 616px) {
  .birch-wrapper-padding .wrapper-inner {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  .birch-wrapper-padding-2column-first .wrapper-inner {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  .birch-wrapper-padding-2column-second .wrapper-inner {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  .birch-wrapper-padding-2column-banner-column2 .wrapper-inner {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media only screen and (max-width: 616px) {
  .birch-wrapper-padding-2column-banner-image {
    width: 100% !important;
  }
}

@media only screen and (max-width: 616px) {
  .birch-grid-small-padding-top {
    padding-top: 16px !important;
  }

  th.birch-grid-column2-left-half-padding {
    padding-top: 50px !important;
    padding-left: 0 !important;
  }
}

@media only screen and (min-width: 617px) {
  .birch-small-only {
    display: none !important;
    overflow: hidden !important;
    max-height: 0 !important;
    font-size: 0 !important;
    line-height: 0 !important;
  }
}

@media only screen and (max-width: 616px) {
  .birch-util-mobile-center {
    Margin: 0 auto;
    clear: both;
    float: none;
    margin: 0 auto;
    text-align: center;
  }

  .birch-util-mobile-padding-top-50 {
    padding-top: 50px !important;
  }

  .birch-util-mobile-padding-bottom-50 {
    padding-bottom: 50px !important;
  }
}

.birch-util-img-float-right-desktop {
    float: right; }
  
  @media (max-width: 617px) {
    .birch-util-img-float-right-desktop {
      float: none !important; } }
  
  .align-right-desktop {
    text-align: right; }
    .align-right-desktop table,
    .align-right-desktop tr,
    .align-right-desktop th {
      text-align: right; }
</style>
  </head>
  <body style="-moz-box-sizing: border-box; -ms-text-size-adjust: 100%; -webkit-box-sizing: border-box; -webkit-text-size-adjust: 100%; Margin: 0; background: {{emailBackGroundColor}}; background: {{emailBackGroundColor}} !important; box-sizing: border-box; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; min-width: 100%; padding: 0; text-align: left; width: 100% !important">
    <span class="preheader" style="color: {{emailBackGroundColor}}; display: none !important; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; mso-hide: all !important; opacity: 0; overflow: hidden; visibility: hidden">{{emailPreheader}}</span>
    <table class="body" style="Margin: 0; background: {{emailBackGroundColor}}; background: {{emailBackGroundColor}} !important; border-collapse: collapse; border-spacing: 0; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; height: 100%; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top; width: 100%">
      <tr style="padding: 0; text-align: left; vertical-align: top">
        <td class="center" align="center" valign="top" style="Margin: 0; border-collapse: collapse !important; color: #2E2E2E; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word">
          <!-- <center> -->
            <!-- email components BEGIN -->
            `
            let baseEmailHtmlTopMerged = baseEmailHtmlTop; // this will hold the value when email header and preheader are inserted
            const baseEmailHtmlBottom = `
            

            <!-- email components END -->
				
				
			</td>
		</tr>
	</table><!-- prevent Gmail on iOS font size manipulation -->
	<div style="display:none;white-space:nowrap;font:15px courier;line-height:0">
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
	</div>
</body>
</html>`

