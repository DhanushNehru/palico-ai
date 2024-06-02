import { ConversationRequestContent, ConversationResponse } from ".";

export interface LabExperimentModel {
  id: string;
  agentId: string;
  label: string;
  featureFlagJSON?: string;
}

export interface LabTestCaseModel {
  id: string;
  label: string;
  userMessage: ConversationRequestContent['userMessage'];
  payloadString?: string;
}

export interface LabExperimentTestResultMetadata {
  conversationId: string;
  requestId: string;
  tracePreviewUrl?: string;
}

export type LabExperimentTestResult = {
  status: 'RUNNING' | 'SUCCESS' | 'FAILURE';
  metadata?: LabExperimentTestResultMetadata;
  message?: ConversationResponse['message'];
  data?: ConversationResponse['data'];
};

export interface QuickLabContentJSON {
  experiments: LabExperimentModel[];
  testCases: LabTestCaseModel[];
  baselineExperimentId?: string;
  experimentTestResults: Record<
    string,
    Record<string, LabExperimentTestResult>
  >;
}

export interface QuickLabMetadata {
  id: string;
  name: string;
  createdAt: number;
}

export interface QuickLab extends QuickLabMetadata, QuickLabContentJSON {}

export type CreateQuickLabParams = Omit<
  QuickLab,
  'id' | 'createdAt' | 'updatedAt'
>;

export type UpdateStudioLabParams = Partial<QuickLabContentJSON>;