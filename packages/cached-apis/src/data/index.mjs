export { actionCategories, isSameAsActionCat } from './action-cats'

export const sdgsShort = {
  en: [
    '1. No Poverty',
    '2. Zero Hunger',
    '3. Good Health and Well-being',
    '4. Quality Education',
    '5. Gender Equality',
    '6. Clean Water and Sanitation',
    '7. Affordable and Clean Energy',
    '8. Decent Work and Economic Growth',
    '9. Industry, Innovation and Infrastructure',
    '10. Reduced Inequality',
    '11. Sustainable Cities and Communities',
    '12. Responsible Consumption and Production',
    '13. Climate Action',
    '14. Life Below Water',
    '15. Life on Land',
    '16. Peace and Justice Strong Institutions',
    '17. Partnerships to achieve the Goal'
  ]
}

export const orgTypeOther = { identifier: 'ORG-TYPE-OTHER', name: 'Other', title: { en: 'Other' } }

export const documentStates = [
  { identifier: 'draft',     name: { en: 'Draft' } },
  { identifier: 'published', name: { en: 'Published' } },
  { identifier: 'rejected',  name: { en: 'Rejected' } },
  { identifier: 'deleted',   name: { en: 'Deleted' } }
]