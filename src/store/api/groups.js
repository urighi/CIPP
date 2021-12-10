import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from './baseQuery'

export const groupsApi = createApi({
  reducerPath: 'groups',
  baseQuery: baseQuery(() => ({})),
  endpoints: (builder) => ({
    addGroup: builder.mutation({
      query: ({ group }) => ({
        path: '/api/AddGroup',
        method: 'post',
        data: { group },
      }),
    }),
    editGroup: builder.mutation({
      query: ({ group }) => ({
        path: '/api/EditGroup',
        method: 'post',
        data: { group },
      }),
    }),
    listGroups: builder.query({
      query: ({ tenantDomain }) => ({
        path: '/api/ListGroups',
        params: {
          TenantFilter: tenantDomain,
        },
      }),
    }),
    listGroup: builder.query({
      query: ({ tenantDomain, groupId }) => ({
        path: '/api/ListGroups',
        params: {
          TenantFilter: tenantDomain,
          GroupId: groupId,
        },
      }),
    }),
    listGroupMembers: builder.query({
      query: ({ tenantDomain, groupId }) => ({
        path: '/api/ListGroups',
        params: {
          TenantFilter: tenantDomain,
          GroupId: groupId,
          members: true,
        },
      }),
    }),
    listGroupOwners: builder.query({
      query: ({ tenantDomain, groupId }) => ({
        path: '/api/ListGroups',
        params: {
          TenantFilter: tenantDomain,
          GroupId: groupId,
          owners: true,
        },
      }),
    }),
  }),
})
export const {
  useAddGroupMutation,
  useEditGroupMutation,
  useListGroupQuery,
  useListGroupsQuery,
  useListGroupMembersQuery,
  useListGroupOwnersQuery,
} = groupsApi
