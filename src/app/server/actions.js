/**
 * ! The server actions below are used to fetch the static data from the fake-db. If you're using an ORM
 * ! (Object-Relational Mapping) or a database, you can swap the code below with your own database queries.
 */
'use server'

// Data Imports
import { db as eCommerceData } from '@/fake-db/apps/ecommerce'
import { db as academyData } from '@/fake-db/apps/academy'
import { db as vehicleData } from '@/fake-db/apps/logistics'
import { db as invoiceData } from '@/fake-db/apps/invoice'
import { db as userData } from '@/fake-db/apps/userList'
import { db as permissionData } from '@/fake-db/apps/permissions'
import { db as profileData } from '@/fake-db/pages/userProfile'
import { db as faqData } from '@/fake-db/pages/faq'
import { db as pricingData } from '@/fake-db/pages/pricing'
import { db as statisticsData } from '@/fake-db/pages/widgetExamples'
import { db as projectManagementData } from '@/fake-db/apps/projectManagement'
import { db as projectTasksData } from '@/fake-db/apps/projectTasks'
import { db as projectIssueData } from '@/fake-db/apps/projectIssue'

export const getEcommerceData = async () => {
  return eCommerceData
}

export const getAcademyData = async () => {
  return academyData
}

export const getLogisticsData = async () => {
  return vehicleData
}

export const getInvoiceData = async () => {
  return invoiceData
}

export const getUserData = async () => {
  return userData
}

export const getPermissionsData = async () => {
  return permissionData
}

export const getProfileData = async () => {
  return profileData
}

export const getFaqData = async () => {
  return faqData
}

export const getPricingData = async () => {
  return pricingData
}

export const getStatisticsData = async () => {
  return statisticsData
}
export const getProjectManagementData = async () => {
  return projectManagementData
}

export const getProjectTasksData = async () => {
  return projectTasksData
}

export const getProjectIssueData = async () => {
  return projectIssueData
}
import { db as projectInventoryData } from '@/fake-db/apps/projectInventory'
import { db as vendorTransactionsData } from '@/fake-db/apps/vendorTransactions'

export const getProjectInventoryData = async () => {
  return projectInventoryData
}

export const getVendorTransactionsData = async () => {
  return vendorTransactionsData
}
