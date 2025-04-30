import {
  AdminMetaAssetsIcon,
  AdminTransactionManagementIcon,
  UserManagementIcon,
  
} from "@/assets/svgs";
import { AdminAppRoutes } from "@/constants/app-routes";

export interface IconProps {
  className?: string;
}

export type AdminSidebarDataType = {
  title: string;
  link: string;
  icon: React.FC<IconProps>;
};

export const AdminSidebarData: AdminSidebarDataType[] = [
  {
    title: "User Management",
    link: AdminAppRoutes.dashboard.user_management,
    icon:UserManagementIcon,
  },
  {
    title: "Transaction Management",
    link: AdminAppRoutes.dashboard.transaction_management,
    icon: AdminTransactionManagementIcon,
  },
  {
    title: "Meta-Assets Management",
    link: AdminAppRoutes.dashboard.meta_assets_management,
    icon: AdminMetaAssetsIcon,
  },
];
