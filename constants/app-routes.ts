export const AppRoutes = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
  },
  passwords: {
    forgot_password: "/passwords/forgot-password",
    reset_password: "/passwords/reset-password",
  },
  email: {
    email_sent: "/email-sent",
    varified: "/verify-email",
  },
  dashboard: {
    index: "/dashboard/user",
    affiliates: "/dashboard/user/affiliates",
    chat_bot: "/dashboard/user/chat-bot",
    education: "/dashboard/user/education",
    notifications: "/dashboard/user/notifications",
    leaderboard: "/dashboard/user/leaderboard",
    kyc: "/dashboard/user/kyc",
    rental_miners: "/dashboard/user/rental-miners",
  },

  profile: {
    my_profile: "/dashboard/user/my-profile",
    my_invoice: "/dashboard/user/my-invoice",
    terms: "/terms",
  },
  privacy_policy: "/privacy-policy",
} as const;

export const AdminAppRoutes = {
  dashboard: {
    index: "/dashboard/admin/meta-assets-management",
    meta_assets_management: "/dashboard/admin/meta-assets-management",
    user_management: "/dashboard/admin/user-management",
    transaction_management: "/dashboard/admin/transaction-management",
  },
} as const;
